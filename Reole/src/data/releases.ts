export type Release = {
  title: string;
  type: "Single" | "EP" | "Album" | "Film" | "Live" | "Other";
  releaseDate: string;
};

export const upcomingReleases: Release[] = [
  { title: "  Cyclamen EP  ", type: "EP", releaseDate: "March 2026" },
  { title: "  Music's Everywhere vol.1  ", type: "Film", releaseDate: "April 2026" },
];