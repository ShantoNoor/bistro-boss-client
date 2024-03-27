import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import NavBar from "../pages/shared/NavBar";

const Main = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
