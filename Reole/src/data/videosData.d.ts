// src/data/videosData.d.ts
export interface Video {
  id: number;
  title: string;
  type: string;
  youtubeId: string;
  description: string;
  image: string;
  link: string;
  buttonText: string;
}

declare const videosData: Video[];
export default videosData;