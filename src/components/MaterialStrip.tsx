interface MaterialStripProps {
  src: string;
  alt?: string;
  height?: string;
}

export default function MaterialStrip({ src, alt = "", height = "120px" }: MaterialStripProps) {
  return (
    <div style={{ height, overflow: "hidden", position: "relative" }}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ display: "block" }}
      />
    </div>
  );
}
