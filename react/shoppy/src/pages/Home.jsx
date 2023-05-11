import React, { useEffect } from "react";

export default function Home() {
  const SetParams = (e) => {
    console.log("자녀페이지", e);
  };
  useEffect(() => {
    const init = async () => {
      // if (await window.opener) {
      //   console.log("window.opener", window.opener);
        // window.addEventListener("message", SetParams, false);
        // window.opener.postMessage("newTab loaded!", "*");
      // }
    };
    init();
  }, []);
  return <div>Home</div>;
}
