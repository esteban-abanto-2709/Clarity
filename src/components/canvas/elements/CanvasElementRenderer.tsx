import { Rect, Text, Group } from "react-konva";
import type { CanvasElement } from "@/types/canvas";

type Props = {
  element: CanvasElement;
  onChange: (newAttrs: Partial<CanvasElement>) => void;
};

export default function CanvasElementRenderer({ element, onChange }: Props) {
  if (element.type === "note") {
    return (
      <Group
        x={element.x}
        y={element.y}
        draggable
        onDragEnd={(e) => {
          // console.log(e);
          onChange({ x: e.target.x(), y: e.target.y() });
        }}
      >
        <Rect
          width={element.width}
          height={element.height}
          fill="#fff8a6"
          stroke="#333"
          cornerRadius={8}
        />
        <Text
          text={element.content as string}
          fontSize={16}
          padding={10}
          width={element.width}
          height={element.height}
        />
      </Group>
    );
  }

  return null;
}
