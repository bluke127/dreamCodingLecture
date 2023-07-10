"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getTweets } from "@/service/tweets";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [id, setid] = useState("");
  const [password, setpassword] = useState("");
  const [letters, setletters] = useState<any[]>([]);
  const save = () => {};
  const onIdChange = (e: any) => {
    setid(e.target.value);
  };
  const onPasswordChange = (e: any) => {
    setpassword(e.target.value);
  };
  useEffect(() => {
    let func = async () => {
      let res: any[] = await getTweets();
      setletters((l) => [...res]);
    };
    func();
  }, []);
  return (
    <div>
      <div>
        로그인 <input onChange={onIdChange} value={id} />
        비밀번호 <input onChange={onPasswordChange} value={password} />
      </div>
      <div>게시물</div>
      <div>
        {letters.map((letter) => {
          return letter;
        })}
      </div>
      <div onClick={save}>저장</div>
    </div>
  );
}
