export type Release = {
  title: string;
  type: "Single" | "EP" | "Album" | "Film" | "Live" | "Other";
  releaseDate: string;
};

export const upcomingReleases: Release[] = [
  { title: "  momken bokra? EP  ", type: "EP", releaseDate: "August 2026" },
  { title: "  Music's Everywhere vol.3  ", type: "Film", releaseDate: "September 2026" },
];