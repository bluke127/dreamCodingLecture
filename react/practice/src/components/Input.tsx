import React, { useEffect } from "react";
import "@/styles/components/Input.scss";
export default function Input(props) {
  // useEffect(()
  const { value, onChange, style, type, placeholder, label } = props;
  return (
    <span className="input_wrap">
      {props.label && <label htmlFor={props.id} />}
      <input
        value={value}
        onChange={onChange}
        style={style}
        type={type}
        placeholder={placeholder}
      />
    </span>
  );
}
