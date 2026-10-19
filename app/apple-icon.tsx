import { ImageResponse } from "next/og";

import { logoMark } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * The home-screen icon for iOS: the same mark on a full-bleed graphite
 * square (iOS rounds the corners itself).
 * @returns the generated touch icon
 */
const AppleIcon = () =>
  new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1c1c1a"
      }}
    >
      <svg width="120" height="109" viewBox={logoMark.viewBox}>
        {logoMark.outer.map((d, i) => (
          <path key={i} d={d} fill="#e4e3df" />
        ))}
        <path d={logoMark.inner} fill="#7fa77e" />
      </svg>
    </div>,
    size
  );

export default AppleIcon;
