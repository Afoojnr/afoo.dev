import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { logoMark, site } from "@/lib/brand";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The link preview card, built in code (Archivo is bundled in assets/) in the site's catalogue look: matte
 * ground, huge graphite name, one orange dot, the role as a small caps label.
 * @returns the generated 1200x630 preview image
 */
const OpenGraphImage = async () => {
  const [extraBold, semiBold] = await Promise.all(
    [800, 600].map(weight =>
      readFile(join(process.cwd(), `assets/Archivo-${weight}.ttf`))
    )
  );

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#e4e3df",
        color: "#1e1e1c",
        padding: 72,
        fontFamily: "Archivo"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <svg width="66" height="60" viewBox={logoMark.viewBox}>
          {logoMark.outer.map((d, i) => (
            <path key={i} d={d} fill="#1e1e1c" />
          ))}
          <path d={logoMark.inner} fill="#5b7f5a" />
        </svg>
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase"
          }}
        >
          Software Engineer · Web & Mobile
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 168,
            fontWeight: 800,
            letterSpacing: -6,
            lineHeight: 0.95,
            display: "flex"
          }}
        >
          Afolabi
        </div>
        <div
          style={{
            fontSize: 168,
            fontWeight: 800,
            letterSpacing: -6,
            lineHeight: 0.95,
            display: "flex",
            alignItems: "baseline"
          }}
        >
          Abdulhamid
          <div
            style={{
              width: 30,
              height: 30,
              marginLeft: 6,
              borderRadius: 30,
              background: "#f25a1d"
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "2px solid #c4c2bc",
          paddingTop: 28,
          fontSize: 32,
          color: "#55534e"
        }}
      >
        <div>I turn ideas into products.</div>
        <div>{new URL(site.url).host}</div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Archivo", data: extraBold, weight: 800, style: "normal" },
        { name: "Archivo", data: semiBold, weight: 600, style: "normal" }
      ]
    }
  );
};

export default OpenGraphImage;
