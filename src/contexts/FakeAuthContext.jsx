import { useContext } from "react";

const AuthContext = useContext();

function AuthProvider({ children }) {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

function use()
