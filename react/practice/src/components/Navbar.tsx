import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "@contexts/AuthContext";
import Input from "./Input";
import { UseUtilsContext } from "@contexts/UtilsContext";
import StatusInput from "./StatusInput";
export default function Navbar() {
  const { state: Cuser, action } = useAuthContext();
  const { state: Auser, action: Aaction } = UseUtilsContext();
  const [user, setuser] = useState({ name: "", password: "" });
  const onNameChange = (e) => {
    setuser((u) => {
      return { ...u, name: (e.target as HTMLInputElement).value };
    });
  };
  const onPasswordChange = (e) => {
    console.log((e) => Auser);
    // Aaction(e.target as HTMLInputElement);
    setuser((u) => {
      return { ...u, password: (e.target as HTMLInputElement).value };
    });
  };
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
      <Input
        type="text"
        value={user.name}
        onChange={onNameChange}
        style={{ color: "black" }}
      ></Input>
      <StatusInput
        type="text"
        value={user.name}
        onChange={onNameChange}
        style={{ color: "black" }}
      ></StatusInput>
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
