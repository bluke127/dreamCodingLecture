import { createContext, useContext, useEffect, useState } from "react";
import { ModalPopupStateType } from "@/types/types";
const PopupContext = createContext(null);
export function PopupContextProvider({ children }) {
  const [popupInfo, setPopupInfo] = useState<ModalPopupStateType>({
    type: "알림",
    isOpen: false,
    content: "",
    btnList: [],
  });
  const [modalInfo, setModalInfo] = useState<ModalPopupStateType[]>([]);
  return (
    <PopupContext.Provider value={{ state: popupInfo, action: setPopupInfo }}>
      {children}
    </PopupContext.Provider>
  );
}
export function UseModalPopupContext() {
  return useContext(PopupContext);
}
