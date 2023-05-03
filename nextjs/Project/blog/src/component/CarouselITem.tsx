import Image from "next/image";
import React from "react";
Image;
export default function CarouselITem({
  title,
  description,
  date,
  category,
  path,
  featured,
  src,
}: {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: string;
  src: string;
}) {
  return (
    <div>
      <Image src={src} alt={title} />
      <div>title: {title}</div>
      <div>description : {description}</div>
      <div>date:{date}</div>
      <div>category:{category}</div>
      <div>path:{path}</div>
      <div>featured:{featured}</div>
    </div>
  );
}
