import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProvider";

const useAuth = () => {
  return useContext(AuthContex);
};

export default useAuth;
