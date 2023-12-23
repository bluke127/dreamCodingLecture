// pages/test/[id].tsx

import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface TestProps {
  data: {
    id: string;
    content: string;
  };
}

function Test({ data }: TestProps) {
  return <div>Test {JSON.stringify(data)}</div>;
  zz
}

export default Test;

export const getStaticPaths: GetStaticPaths = async () => {
  // 여기서는 사용할 동적인 경로를 가져오는 로직을 구현해야 합니다.
  const paths = [{ params: { id: "test1" } }];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<TestProps> = async ({ params }) => {
  // 여기서는 params를 이용하여 동적인 데이터를 가져오는 로직을 구현해야 합니다.
  // 실제로는 데이터베이스 쿼리, 외부 API 호출 등을 사용할 수 있습니다.
  console.log(params,"params")
  const dynamicData = {
    id: params?.id as string,
    content: "This is dynamic content for the page.",
  };

  return {
    props: {
      data: dynamicData,
    },
  };
};
