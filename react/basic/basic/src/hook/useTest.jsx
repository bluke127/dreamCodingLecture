import { useEffect, useState } from "react";
export default function useTest(arg) {
  const [a, setA] = useState(arg);
  useEffect(() => {
    console.log(arg);
    setA(arg);
  }, [arg]);
  return { a };
}
