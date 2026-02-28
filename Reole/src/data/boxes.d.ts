// src/data/boxes.d.ts
declare module "../data/boxes" {
  export interface Box {
    id: number;
    title: string;
    content?: string; // optional fields
  }
  const boxes: Box[];
  export default boxes;
}