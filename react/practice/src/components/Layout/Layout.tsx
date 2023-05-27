import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { UseUtilsContext } from "@contexts/UtilsContext";

export default function Layout() {
  const { state, action } = UseUtilsContext();

  const setCurrentTarget = ($event) => {
    console.log($event.target);
    console.log(action.setTarget($event.target), state);

    // action?.setTarget($event.target);
  };
  return (
    <div onClick={setCurrentTarget} id="app_wrap">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
