import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";

const Main = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
