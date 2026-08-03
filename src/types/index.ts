export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: "Slots" | "Fishing" | "Hot" | "Popular" | "PC";
  rating: number;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  content: string;
}
