import ReactDOM from "react-dom";

export const PopupPortal = ({ children }) => {
  const el = document.getElementById("popup_root");
  return ReactDOM.createPortal(children, el);
};

export const ModalPortal = ({ children }) => {
  const el = document.getElementById("modal_root");
  return ReactDOM.createPortal(children, el);
};
