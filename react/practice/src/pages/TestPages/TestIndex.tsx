import React from "react";
import { AuthContextProvider } from "@contexts/AuthContext";
import styles from "@/styles/pages/TestIndex.module.scss";
export default function TestIndex() {
  // return <div>TestIndex</div>;
  return (
    <>
      <AuthContextProvider>
        <div id="wrap">TestIndex</div>

        <div className={styles.test}>TestIndex</div>
      </AuthContextProvider>
    </>
  );
}
