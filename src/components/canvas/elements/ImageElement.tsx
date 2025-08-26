import { Image as KonvaImage } from "react-konva";
import type { ImageElement as ImageElementType } from "@/types/canvas";

export default function ImageElement({ id, x, y, width, height, src }: ImageElementType) {
  const img = new window.Image();
  img.src = src;

  return (
    <KonvaImage
      key={id}
      x={x}
      y={y}
      width={width}
      height={height}
      image={img}
      draggable
    // Aquí luego conectaremos al store para actualizar posición
    />
  );
}