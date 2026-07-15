import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f4f7fb",
          background: "linear-gradient(135deg, #151014, #8b3f61)",
          border: "3px solid #f3a7c4",
          borderRadius: "50%",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-1px",
        }}
      >
        LYR
      </div>
    ),
    size,
  );
}
