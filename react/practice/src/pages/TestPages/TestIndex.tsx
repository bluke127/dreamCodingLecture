import React from "react";
import { AuthContextProvider } from "@contexts/AuthContext";

export default function TestIndex() {
  // return <div>TestIndex</div>;
  return (
    <>
      <AuthContextProvider>
        <div>TestIndex</div>
      </AuthContextProvider>
    </>
  );
}
