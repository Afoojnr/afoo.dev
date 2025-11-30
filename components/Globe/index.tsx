"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useTheme } from "next-themes";

import { drawMap } from "./drawMap";
import React from "react";

type GlobeProps = {
  lat: number;
  lon: number;
  pinColor?: string;
};

const Globe = ({ lat, lon, pinColor = "#ff0000" }: GlobeProps) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const { resolvedTheme } = useTheme();

  const bgColor = resolvedTheme === "dark" ? "#0a0a0a" : "#ffffff";
  const lineColor = resolvedTheme === "dark" ? "#818cf8" : "#313bac";

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // === Scene & Camera ===
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(bgColor);
    scene.background = null;
    scene.fog = new THREE.FogExp2(bgColor, 0.3);

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    camera.position.z = 5;

    // === Renderer ===
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // === Controls ===
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;

    // === Globe Group (NEW) ===
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // === Globe radius breakpoints ===
    let globeRadius = 2.5;
    // if (window.innerWidth > 1600) globeRadius = 3.5;
    if (window.innerWidth > 1200) globeRadius = 3;
    else if (window.innerWidth > 768) globeRadius = 2.7;

    // === Globe Outline ===
    const sphereGeo = new THREE.SphereGeometry(globeRadius);
    const edges = new THREE.EdgesGeometry(sphereGeo);
    const lineMat = new THREE.LineBasicMaterial({
      color: lineColor,
      opacity: 0.4,
      transparent: true
    });
    const line = new THREE.LineSegments(edges, lineMat);
    globeGroup.add(line);

    // === Load GeoJSON ===
    const loadGeoJSON = async () => {
      try {
        const res = await fetch("/geojson/countries.json");
        const txt = await res.text();
        const data = JSON.parse(txt);

        const countries = drawMap({
          json: data,
          radius: globeRadius,
          materalOptions: { color: lineColor }
        });

        globeGroup.add(countries);
      } catch (err) {
        console.error("Error loading GeoJSON:", err);
      }
    };
    loadGeoJSON();

    // Convert lat/lon to 3D position
    const latLongToVector3 = (lat: number, lon: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);

      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    // Pin position
    const pinPos = latLongToVector3(lat, lon, globeRadius);

    // === Pin ===
    const pinGeo = new THREE.SphereGeometry(0.04, 16, 16);
    const pinMat = new THREE.MeshBasicMaterial({ color: pinColor });
    const pin = new THREE.Mesh(pinGeo, pinMat);
    pin.position.copy(pinPos);
    globeGroup.add(pin);

    // === Pulsing Ring ===
    const ringGeo = new THREE.RingGeometry(0.05, 0.08, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: pinColor,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.copy(pinPos);
    ring.lookAt(0, 0, 0);
    globeGroup.add(ring);

    // === Auto-Rotate Globe to Face Pin (NEW) ===
    // Project pin onto XZ plane (remove vertical tilt)
    const projected = pinPos.clone();
    projected.y = 0;

    // If pin is exactly at the poles (rare), skip
    if (projected.length() > 0.0001) {
      projected.normalize();

      // Compute angle between projected pin and camera's forward direction (0,0,1)
      const angle = Math.atan2(projected.x, projected.z);

      // Rotate globe so pin points forward
      globeGroup.rotation.y = angle + Math.PI; // add 180° correction
    }

    // === Animate ===
    const animate = () => {
      requestAnimationFrame(animate);

      // Optional idle spin
      globeGroup.rotation.y += 0.0005; // comment this out if you don't want rotation

      // Pulse animation
      ring.scale.x += 0.01;
      ring.scale.y += 0.01;
      ring.material.opacity -= 0.01;

      if (ring.material.opacity <= 0) {
        ring.scale.set(1, 1, 1);
        ring.material.opacity = 0.6;
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // === Resize Handler ===
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // === Cleanup ===
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();

      scene.traverse(obj => {
        if ((obj as THREE.Mesh).geometry)
          (obj as THREE.Mesh).geometry.dispose();
        if ((obj as THREE.Mesh).material) {
          const mat = (obj as THREE.Mesh).material;
          if (Array.isArray(mat)) mat.forEach(m => m.dispose());
          else mat.dispose();
        }
      });
    };
  }, [lat, lon, bgColor, lineColor, pinColor]);

  return <div ref={mountRef} className="relative h-full w-full" />;
};

export default Globe;
