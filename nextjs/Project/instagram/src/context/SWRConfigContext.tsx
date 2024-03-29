"use client";
import { SessionProvider } from "next-auth/react";
import { SWRConfig } from "swr";

type Props = {
  children: React.ReactNode;
};

export default function SWRConfigContext({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url).then((res) => {
            return res.json()
          }),
      }}
    >
      {children}
    </SWRConfig>
  );
}
