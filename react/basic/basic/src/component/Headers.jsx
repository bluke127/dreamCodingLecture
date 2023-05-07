import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import useTest from "../hook/useTest.jsx";

export default function Headers() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { a } = useTest(darkMode);

  return (
    <>
      {JSON.stringify(darkMode) + "dark"}
      <br />
      <br />
      {JSON.stringify(a) + "지요"}
      <br />
      <br />
      <input type="checkbox" onChange={toggleDarkMode} />
      <br />
      <br />
      <div>{darkMode + "darkMode"}</div>
    </>
  );
}
