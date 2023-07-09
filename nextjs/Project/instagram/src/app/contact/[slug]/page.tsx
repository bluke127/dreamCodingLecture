import { Metadata } from "next";
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  return {
    title: slug + "???????????",
  };
}
