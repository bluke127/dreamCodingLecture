import { Post } from "@/app/service/posts";
import Link from "next/link";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

type Props = {
  post: Post;
  type: "prev" | "next";
};
export default function AdjacentPostCard({
  post: { path, title, description },
  type,
}: Props) {
  return (
    <Link
      href={`/images/posts/${path}.png`}
      alt={title}
      width={150}
      height={1000}
    >
      <div>
        {type === "prev" && <FaArrowLeft />}
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {type === "next" && <FaArrowRight />}
      </div>
    </Link>
  );
}
