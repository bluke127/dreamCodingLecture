import React, {
  useEffect,
  forwardRef,
  ChangeEventHandler,
  RefObject,
} from "react";
import "@/styles/components/Input/Input.scss";
type propsType = {
  value: string | boolean | number;
  id?: string;
  onChange: ChangeEventHandler;
  style?: any;
  type?: string;
  placeholder?: string;
  label?: string;
  className?: string;
};
const Input = forwardRef(
  (props: propsType, ref: RefObject<HTMLInputElement>) => {
    const {
      value = "",
      id = "",
      onChange,
      style,
      type = "text",
      placeholder,
      label,
      className,
    } = props;
    return (
      <span className="input_wrap">
        {props.label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          // @ts-ignore
          value={value}
          onChange={onChange}
          style={style}
          type={type}
          placeholder={placeholder}
          ref={ref}
          className={className}
        />
      </span>
    );
  }
);
export default Input;
