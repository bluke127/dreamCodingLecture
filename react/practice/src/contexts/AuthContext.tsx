import {
  Context,
  Dispatch,
  ProviderProps,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
interface AuthType {
  state: { user: { name: string; password: string } };
  action: { setUser: Dispatch<any> };
}
const AuthContext = createContext<AuthType>({
  state: { user: { name: "", password: "" } },
  action: { setUser: () => {} },
});

export function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState<any>({ name: "", password: "" });

  useEffect(() => {
    // onUserStateChange((user) => setUser(user));
  }, []);

  return (
    // @ts-ignore
    <AuthContext.Provider value={{ state: { user }, action: { setUser } }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
