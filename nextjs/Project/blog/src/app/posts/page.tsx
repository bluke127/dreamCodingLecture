import { getAllPosts } from "../service/posts";
export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts)];
  return <div>포스트들</div>;
}
