import { Line } from "react-konva";
import type { LineElement as LineElementType } from "@/types/canvas";

export default function LineElement({ id, points, stroke = "#2563eb", strokeWidth = 3 }: LineElementType) {
  return (
    <Line
      key={id}
      points={points}
      stroke={stroke}
      strokeWidth={strokeWidth}
      tension={0.5}
      lineCap="round"
      lineJoin="round"
    />
  );
}
