import { useState } from "react";
import CanvasElementRenderer from "./elements/CanvasElementRenderer";
import type { CanvasElement } from "@/types/canvas";
import { Stage, Layer } from "react-konva";

export default function InfiniteCanvas() {
  const [elements, setElements] = useState<CanvasElement[]>([
    {
      id: "1",
      type: "note",
      x: 100,
      y: 100,
      width: 200,
      height: 100,
      content: "Hola mundo 👋",
    },
  ]);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {elements.map((el) => (
          <CanvasElementRenderer
            key={el.id}
            element={el}
            onChange={(newAttrs) => {
              setElements((prev) =>
                prev.map((e) => (e.id === el.id ? { ...e, ...newAttrs } : e))
              );
            }}
          />
        ))}
      </Layer>
    </Stage>
  );
}
