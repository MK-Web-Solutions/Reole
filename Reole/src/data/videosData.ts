export interface Video {
  id: number;
  title: string;
  type: string;
  description: string;
  details: string;
  youtubeId: string;
  link: string;
  buttonText: string;
}

export const videosData: Video[] = [
  {
    id: 1,
    title: "The Batman",
    type: "Score",
    description: "Trailer Rescore",
    details: "Trailer Cue: Dark Suspense. Tension-driven music with careful pacing, featuring low strings, subtle percussion, and eerie textures to heighten suspense and emotional tension.",
    youtubeId: "N0PbmuwyxQ4",
    link: "/videos",
    buttonText: "View All Scores"
  },
  {
    id: 2,
    title: "YCH 7th Edition",
    type: "Performance",
    description: "Live at Founder's space",
    details: "Medley of Egyptian soundtracks performed live. Highlights traditional melodies blended with modern arrangements, showcasing expressive dynamics and rich instrumental textures.",
    youtubeId: "aJ5BRYFR3vI",
    link: "/videos",
    buttonText: "View All Performances"
  },
  {
    id: 3,
    title:"1917",
    type: "Score",
    description: "Trailer Rescore",
    details: "Trailer Cue: Urgency & Momentum. Rhythmic score supporting continuous motion and intensity, featuring driving percussion, fast string motifs, and a sense of relentless forward motion.",
    youtubeId: "i8xAoPokhYY",
    link: "/videos",
    buttonText: "View All Scores"
  },
  { 
    id: 4,
    title: "2012",
    type: "Score",
    description: "Scene Rescore",
    details: "Scene Cue: Conflict & Reconciliation. Emphasizes tension and emotional resolution, using layered orchestration and dynamic swells to highlight dramatic character moments.",
    youtubeId: "Or_BOy8Lpao",
    link: "/videos",
    buttonText: "View All Scores"
  },
  {
    id: 5,
    title: "The Lord of the Rings",
    type: "Score",
    description: "Scene Rescore",
    details: "Scene Cue: Corruption & Redemption. Supports inner conflict and redemption arcs through subtle harmonic shifts, delicate instrumentation, and thematic leitmotifs.",
    youtubeId: "F0paZfV50fE",
    link: "/videos",
    buttonText: "View All Scores"
  },
  {
    id: 6,
    title: "Room Cairo",
    type: "Performance",
    description: "Live Performance",
    details: "Solo acoustic performance covering popular songs with a unique twist. Focuses on expressive phrasing, fingerstyle techniques, and dynamic storytelling through music.",
    youtubeId: "ypL-4Ob4GMA",
    link: "/videos",
    buttonText: "View All Performances"
  }
];