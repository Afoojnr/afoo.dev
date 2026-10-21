import { ImageResponse } from "next/og";

import { logoMark } from "@/lib/brand";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// PNG fallback for browsers without SVG favicons (Safari); icon.svg adapts to dark mode
const Icon = () =>
  new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <svg width="64" height="57" viewBox={logoMark.tightViewBox}>
        {logoMark.outer.map((d, i) => (
          <path key={i} d={d} fill="#1e1e1c" />
        ))}
        <path d={logoMark.inner} fill="#5b7f5a" />
      </svg>
    </div>,
    size
  );

export default Icon;
