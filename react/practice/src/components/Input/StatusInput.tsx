import React, { useEffect, useMemo, useRef } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Input from "./Input";
import "@/styles/components/Input/StatusInput.scss";
import { UseUtilsContext } from "@/contexts/UtilsContext";
export default function StatusInput(props) {
  const {
    state: { target },
    action: Aaction,
  } = UseUtilsContext();
  const InputRef = useRef();
  const {
    value = "",
    onChange,
    style,
    type,
    placeholder,
    validation,
    onClear,
    label,
  } = props;

  const passValidation = useMemo(() => {
    return validation?.test(value);
  }, [value]);

  return (
    <div className="status_input_wrap">
      <Input
        value={value}
        onChange={onChange}
        style={style}
        type={type}
        placeholder={placeholder}
        ref={InputRef}
        className={passValidation ? "success" : "fail"}
      />
      {target === InputRef?.current && (
        <span className="clear_value" onClick={props.onClear}>
          <AiFillCloseCircle />
        </span>
      )}
    </div>
  );
}
