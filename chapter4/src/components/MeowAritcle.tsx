"use client";
import { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";

export default function MeowAritcle(props) {
  const [text, setText] = useState<string>("데이터 준비중");
  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then(async (data) => setText(await data.data[0]));
  }, []);
  return <article className={styles.article}>{text || "sss"}</article>;
}
