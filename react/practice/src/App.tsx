import SearchHeader from "@components/SearchHeader";
import { useId, useState } from "react";
import { Suspense } from "react";
import { AuthContextProvider } from "@contexts/AuthContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "@components/Layout/Layout";
import "@/styles/App.scss";
import UtilsContextProvider, { UseUtilsContext } from "@contexts/UtilsContext";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
function App() {
  const id = useId();
  return (
    <Suspense fallback={<div>로딩중이에요!!!!</div>}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <UtilsContextProvider>
            <Layout></Layout>
          </UtilsContextProvider>
        </AuthContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
