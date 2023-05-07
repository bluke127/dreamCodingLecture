import Headers from "./component/Headers.jsx";
import Contents from "./component/Contents.jsx";
import NotFount from "./component/NotFount.jsx";
import "./App.css";
import {
  DarkModeContext,
  DarkModeProvider,
} from "./context/DarkModeContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useContext } from "react";

import useTest from "./hook/useTest.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Headers />,
  },
  {
    path: "/content",
    element: <Contents />,
  },
  {
    path: "*",
    element: <NotFount />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <DarkModeProvider>
        <Headers></Headers>
        <Contents></Contents>
      </DarkModeProvider> */}
    </div>
  );
}

export default App;
