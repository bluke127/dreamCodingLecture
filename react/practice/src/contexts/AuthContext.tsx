import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({ name: "", password: "" });

  useEffect(() => {
    // onUserStateChange((user) => setUser(user));
  }, []);

  return (
    <AuthContext.Provider value={{ state: { user }, action: { setUser } }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
