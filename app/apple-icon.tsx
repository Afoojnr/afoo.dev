import { ImageResponse } from "next/og";

import { logoMark } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
      <svg width="140" height="124" viewBox={logoMark.tightViewBox}>
        {logoMark.outer.map((d, i) => (
          <path key={i} d={d} fill="#f5f4f0" />
        ))}
        <path d={logoMark.inner} fill="#8fc48d" />
      </svg>
    </div>,
    size
  );

export default AppleIcon;
