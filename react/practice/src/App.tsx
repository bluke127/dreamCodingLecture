import { Suspense } from "react";
import { AuthContextProvider } from "@contexts/AuthContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "@components/Layout/Layout";
import "@/styles/App.scss";
import UtilsContextProvider from "@contexts/UtilsContext";
import { PopupPortal } from "@/components/ModalPopup/ModalPopupPortal";
import { PopupContextProvider } from "@/contexts/ModalPopupContext";
import Popup from "@/components/ModalPopup/Popup";
import Modal from "@/components/ModalPopup/Modal";
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
        {/* 권한관련 context */}
        <AuthContextProvider>
          {/* 현재 클릭한 target 세팅하는 context */}
          <UtilsContextProvider>
            <PopupContextProvider>
              <Layout></Layout>
              <PopupPortal>
                <Popup></Popup>
                <Modal></Modal>
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
