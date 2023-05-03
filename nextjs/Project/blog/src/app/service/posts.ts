import path from "path";
import { readFile } from "fs/promises";
export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: string;
};
export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}
export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}
export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then(JSON.parse)
    .then((posts) =>
      posts.sort((a: any, b: any) => (a.date > b.date ? -1 : 1))
    );
}
