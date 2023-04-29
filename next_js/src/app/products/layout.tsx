import Link from "next/link";
import styles from "./layout.module.css";
import { Metadata } from "next";
// import "./globals.css";

export const metadata: Metadata = {
  title: "멋진 제품 사이트",
  description: "멋진 제품을 판매하는 곳입니다.",
  icons: {
    icon: "/favicon.ico ",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <nav className={styles.nav}>
        <Link href="/products/pants">여성옷</Link>
        <Link href="/products/skirts">남성옷</Link>
      </nav>
      <section className={styles.products}>{children}</section>
    </html>
  );
}
