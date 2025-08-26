
export interface BaseElement {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  isSelected?: boolean;
}

export interface ImageElement extends BaseElement {
  type: "image";
  src: string; // en vez de guardar el HTMLImageElement, guardamos la ruta/base64
}

export interface NoteElement extends BaseElement {
  type: "note";
  text: string;
}

export interface LineElement {
  type: "line";
  id: string;
  points: number[];
  stroke?: string;
  strokeWidth?: number;
}

export type CanvasElement = {
  id: string;
  type: "note" | "image"; // expandiremos luego
  x: number;
  y: number;
  width: number;
  height: number;
  content?: string; // texto o url de imagen
};
