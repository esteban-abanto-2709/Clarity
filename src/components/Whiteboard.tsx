import { Stage, Layer, Line } from "react-konva";
import { useState } from "react";

export default function Whiteboard() {
  const [lines, setLines] = useState<{ x: number; y: number }[][]>([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleMouseDown = () => {
    setIsDrawing(true);
    setLines([...lines, []]); // empieza una nueva línea
  };

  const handleMouseMove = (e: any) => {
    if (!isDrawing) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    const newLines = [...lines];
    newLines[newLines.length - 1] = [
      ...newLines[newLines.length - 1],
      point,
    ];
    setLines(newLines);
  };

  const handleMouseUp = () => setIsDrawing(false);

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMousemove={handleMouseMove}
      onMouseup={handleMouseUp}
      className="bg-white"
    >
      <Layer>
        {lines.map((line, i) => (
          <Line
            key={i}
            points={line.flatMap((p) => [p.x, p.y])}
            stroke="black"
            strokeWidth={3}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
          />
        ))}
      </Layer>
    </Stage>
  );
}
