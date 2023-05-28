import ReactDOM from "react-dom";

const PopupPortal = ({ children }) => {
  const el = document.getElementById("popup_root");
  return ReactDOM.createPortal(children, el);
};
export default PopupPortal;
