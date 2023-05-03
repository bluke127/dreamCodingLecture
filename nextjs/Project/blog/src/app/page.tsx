import Image from "next/image";
import Hero from "../component/Hero";
import FeaturedPosts from "@/component/FeaturedPosts";
import Carousel from "@/component/Carousel";
export default function HomePage() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Hero></Hero>;<FeaturedPosts></FeaturedPosts>
      {/* @ts-expect-error Async Server Component */}
      <Carousel></Carousel>
    </>
  );
}
