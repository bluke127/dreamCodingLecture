import SearchHeader from "@components/SearchHeader";
import React from "react";
import { Outlet } from "react-router-dom";
import { createContext, useContext, Suspense } from "react";
import { AuthContextProvider } from "@contexts/AuthContext";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Navbar from "@components/Navbar";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
function App() {
  return (
    <Suspense fallback={<div>로딩중이에요!!!!</div>}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <SearchHeader></SearchHeader>
          <Navbar />
          <Outlet></Outlet>
        </AuthContextProvider>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
