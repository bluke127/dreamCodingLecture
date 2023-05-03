import React from "react";
import PostGrid from "./PostGrid";
import { getFeaturedPosts } from "@/app/service/posts";

export default async function FeaturedPosts() {
  // 1. 모든 포스트 데이터를 읽어와야함
  const posts = await getFeaturedPosts();
  // 2. 모든 포스트 데이터를 보여줌
  return (
    <section className="my-4">
      <h2 className="text2-xl font-bold my-2">FeaturedPosts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}
