import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "@/contexts/AuthContext";
import Input from "@/components/Input/Input";
import StatusInput from "@/components/Input/StatusInput";
import { UseUtilsContext } from "@/contexts/UtilsContext";
export default function Navbar() {
  const { state: Cuser, action } = useAuthContext();
  const { state: util, action: Aaction } = UseUtilsContext();
  const [user, setuser] = useState({ name: "", password: "" });
  const onNameChange = (e) => {
    setuser((u) => {
      return { ...u, name: (e.target as HTMLInputElement).value };
    });
  };
  const onPasswordChange = (e) => {
    console.log((e) => util);
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
      <StatusInput
        type="text"
        value={user.name}
        onChange={onNameChange}
        style={{ color: "black" }}
        onClear={(e) =>
          setuser((u) => {
            return { ...u, name: "" };
          })
        }
      ></StatusInput>
      ;;;
      <StatusInput
        type="text"
        value={user.password}
        onChange={onPasswordChange}
        style={{ color: "black" }}
        validation={/^[0-9]+$/}
        onClear={(e) =>
          setuser((u) => {
            return { ...u, password: "" };
          })
        }
      />
      ;<button onClick={onUserStateChange}>로그인</button>;
    </>
  );
}
