export type Release = {
  title: string;
  type: "Single" | "EP" | "Album" | "Film" | "Live" | "Other";
  releaseDate: string;
};

export const upcomingReleases: Release[] = [
  { title: "Midnight Echoes", type: "EP", releaseDate: "March 2026" },
  { title: "Live Studio Session", type: "Film", releaseDate: "April 2026" },
  { title: "Neon Collapse", type: "Single", releaseDate: "May 2026" },
];