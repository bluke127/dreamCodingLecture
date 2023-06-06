import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { UseUtilsContext } from "@/contexts/UtilsContext";
import { UseMutateContext } from "@/contexts/MutateContext";
export default function Layout() {
  const { state, action } = UseUtilsContext();
  const { state: mutateState, action: mutateAction } = UseMutateContext();

  const setCurrentTarget = ($event) => {
    console.log($event.target);
    console.log(action.setTarget($event.target), state);
  };
  return (
    <>
      {mutateState.state.isLoading ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "red",
            position: "fixed",
            left: 0,
            top: 0,
          }}
        >
          로딩중22222222
        </div>
      ) : (
        <div onClick={setCurrentTarget} id="app_wrap">
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </>
  );
}
