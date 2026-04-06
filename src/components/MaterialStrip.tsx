export default function MaterialStrip({ src, height = "80px" }: { src: string; height?: string }) {
  return (
    <div style={{ height, overflow: "hidden" }}>
      <img src={src} alt="" className="w-full h-full object-cover" style={{ display: "block" }} />
    </div>
  );
}
