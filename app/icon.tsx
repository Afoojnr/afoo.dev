import { ImageResponse } from "next/og";

import { logoMark } from "@/lib/brand";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * The favicon, drawn from the wordmark's "A" so it never drifts from the
 * logo. Graphite tile with a light mark reads on both light and dark tabs.
 * @returns the generated tab icon
 */
const Icon = () =>
  new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1c1c1a",
        borderRadius: 14
      }}
    >
      <svg width="44" height="40" viewBox={logoMark.viewBox}>
        {logoMark.outer.map((d, i) => (
          <path key={i} d={d} fill="#e4e3df" />
        ))}
        <path d={logoMark.inner} fill="#7fa77e" />
      </svg>
    </div>,
    size
  );

export default Icon;
