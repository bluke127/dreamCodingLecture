import SearchHeader from "@pages/Components/SearchHeader";
import React from "react";
import { Outlet } from "react-router-dom";
import { createContext, useContext, Suspense } from "react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
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
      <SearchHeader></SearchHeader>
      <QueryClientProvider client={queryClient}>
        <Outlet></Outlet>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
