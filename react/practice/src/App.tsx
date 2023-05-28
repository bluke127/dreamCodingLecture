import { Suspense } from "react";
import { AuthContextProvider } from "@contexts/AuthContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "@components/Layout/Layout";
import "@/styles/App.scss";
import UtilsContextProvider from "@contexts/UtilsContext";
import PopupPortal from "@components/Popup/PopupPortal";
import { PopupContextProvider } from "@contexts/PopupContext";
import Popup from "@components/Popup/Popup";
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
          <UtilsContextProvider>
            <PopupContextProvider>
              <Layout></Layout>
              <PopupPortal>
                <Popup></Popup>
              </PopupPortal>
            </PopupContextProvider>
          </UtilsContextProvider>
        </AuthContextProvider>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
