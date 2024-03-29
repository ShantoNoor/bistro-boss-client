import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import NavBar from "../pages/shared/NavBar";

const Main = () => {
  return (
    <>
     <div className="max-w-screen-xl mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
      </div>
    </>
  );
};

export default Main;
