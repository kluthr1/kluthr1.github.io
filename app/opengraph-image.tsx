import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f5f3ee", color: "#242622", padding: "64px 75px", fontFamily: "Georgia, serif", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", fontFamily: "Arial, sans-serif", fontSize: 19, letterSpacing: 2 }}><span>KARAN LUTHRIA</span><span style={{ color: "#a6503d" }}>MD-PHD STUDENT</span></div>
      <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}><div style={{ display: "flex", flexDirection: "column", fontSize: 91, lineHeight: 1.04, letterSpacing: -4 }}><span>Karan Luthria</span><span style={{ color: "#a6503d" }}>Research</span></div><div style={{ fontFamily: "Arial, sans-serif", fontSize: 24, marginTop: 26, color: "#565a52" }}>Computational oncology · cancer evolution · tumor ecosystems</div></div>
      <div style={{ width: "100%", height: 2, background: "#a6503d" }}/>
    </div>, size
  );
}
