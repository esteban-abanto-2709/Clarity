import { Text } from "react-konva";
import type { NoteElement as NoteElementType } from "@/types/canvas";

export default function NoteElement({ id, x, y, width, height, text }: NoteElementType) {
  return (
    <Text
      key={id}
      x={x}
      y={y}
      width={width}
      height={height}
      text={text}
      fontSize={16}
      fill="#333"
      draggable
    />
  );
}
