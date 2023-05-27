import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Input from "./Input";
import "@/styles/components/StatusInput.scss";
export default function StatusInput(props) {
  const { value, onChange, style, type, placeholder, ClearValue, label } =
    props;
  return (
    <div className="status_input_wrap">
      <Input
        value={value}
        onChange={onChange}
        style={style}
        type={type}
        placeholder={placeholder}
      />
      <span className="clear_value" onClick={props.ClearValue}>
        <AiFillCloseCircle />
      </span>
    </div>
  );
}
