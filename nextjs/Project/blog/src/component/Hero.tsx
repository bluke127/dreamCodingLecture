import React from "react";
import profileImage from "../../public/images/profile.png";
import Image from "next/image";
import Link from "next/link";
export default function () {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt=""
        width={250}
        height={250}
      ></Image>
      <h2 className="text-3xl font-bold mt-2">{"Hi I'm Ellie"}</h2>
      <h3 className="text-xl font-semibold">Full-stack Engineer</h3>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4">
          Contact
        </button>
      </Link>
    </section>
  );
}
