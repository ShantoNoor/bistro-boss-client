import { createContext, useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContex = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
  };

  return (
    <>
      <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>
    </>
  );
};

export default AuthProvider;
