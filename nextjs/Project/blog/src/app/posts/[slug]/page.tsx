import { getPostData } from "@/app/service/posts";
import AdjacentPostCard from "@/component/AdjacentPostCard";
import PostContent from "@/component/PostContent";
import Image from "next/image";
import next from "next/types";

type Props = {
  params: {
    slug: string;
  };
};
export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
      <section>
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}
