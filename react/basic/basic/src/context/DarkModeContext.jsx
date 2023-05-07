import { useState, createContext } from "react";

export const DarkModeContext = createContext();

//데이터를 가지고 보여주는 우산 => 이것도 컴포넌트
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
