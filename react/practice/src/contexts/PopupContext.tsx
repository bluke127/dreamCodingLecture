import { createContext, useContext, useEffect, useState } from "react";
import { modalStateType } from "@/types/types";
const PopupContext = createContext(null);
export function PopupContextProvider({ children }) {
  const [popupInfo, setPopupInfo] = useState<modalStateType>({
    type: "알림",
    isOpen: false,
    content: "",
    btnList: [],
  });
  return (
    <PopupContext.Provider value={{ state: popupInfo, action: setPopupInfo }}>
      {children}
    </PopupContext.Provider>
  );
}
export function UsePopupContext() {
  return useContext(PopupContext);
}
