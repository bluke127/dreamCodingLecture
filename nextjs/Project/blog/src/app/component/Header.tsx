import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1>{"Dong's Blog"}</h1>
      </Link>
      <nav>
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/post">post</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
