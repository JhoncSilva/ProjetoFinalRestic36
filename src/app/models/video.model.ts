export interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  views: number;
  uploadedAt: string; // ISO format, pode ser tratado como `Date` no TypeScript
}
