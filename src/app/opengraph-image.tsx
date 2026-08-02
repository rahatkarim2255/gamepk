import { ImageResponse } from "next/og";

export const alt = "GamePK — Pakistan Gaming Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(145deg, #09090b 0%, #18181b 45%, #450a0a 100%)",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#dc2626",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 800,
            }}
          >
            G
          </div>
          <div style={{ fontSize: "42px", fontWeight: 800 }}>GamePK</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "58px",
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: "980px",
            }}
          >
            Download Latest Version For Android 2026
          </div>
          <div style={{ fontSize: "28px", color: "#a1a1aa", maxWidth: "900px" }}>
            Hot games · JILI slots · JazzCash & Easypaisa · gamepk.net.pk
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            color: "#d4d4d8",
          }}
        >
          <span>Official Pakistan gaming platform</span>
          <span style={{ color: "#f87171", fontWeight: 700 }}>
            gamepk.net.pk
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
