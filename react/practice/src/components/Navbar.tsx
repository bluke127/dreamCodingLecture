import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "@contexts/AuthContext";
export default function Navbar() {
  const { state: Cuser, action } = useAuthContext();
  const [user, setuser] = useState({ name: "", password: "" });
  const onNameChange = (e) => {
    setuser((u) => {
      return { ...u, name: (e.target as HTMLInputElement).value };
    });
  };
  const onPasswordChange = (e) => {
    setuser((u) => {
      return { ...u, password: (e.target as HTMLInputElement).value };
    });
  };
  const onTChange = (e) => {
    setT((u) => {
      return (e.target as HTMLInputElement).value;
    });
  };
  const [t, setT] = useState("???");
  const onUserStateChange = () => {
    action.setUser((item) => {
      return {
        name: user.name,
        password: user.password,
      };
    });
  };
  return (
    <>
      {JSON.stringify(Cuser)}
      <Link to="/test1">test1</Link>
      <Link to="/test2">test2</Link>
      <input
        type="text"
        value={user.name}
        onChange={onNameChange}
        style={{ color: "black" }}
      />
      ;;;
      <input
        type="text"
        value={user.password}
        onChange={onPasswordChange}
        style={{ color: "black" }}
      />
      ;<button onClick={onUserStateChange}>로그인</button>;
    </>
  );
}
