import React, {
  useEffect,
  forwardRef,
  ChangeEventHandler,
  RefObject,
} from "react";
import "@/styles/components/Input.scss";
type propsType = {
  value: string;
  id?: string;
  onChange: ChangeEventHandler;
  style: any;
  type?: string;
  placeholder?: string;
  label?: string;
};
const Input = forwardRef(
  (props: propsType, ref: RefObject<HTMLInputElement>) => {
    const {
      value = "",
      id,
      onChange,
      style,
      type = "text",
      placeholder,
      label,
    } = props;
    return (
      <span className="input_wrap">
        {props.label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          value={value}
          onChange={onChange}
          style={style}
          type={type}
          placeholder={placeholder}
          ref={ref}
        />
      </span>
    );
  }
);
export default Input;
