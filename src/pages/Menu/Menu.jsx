import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import imgMenu from "../../assets/menu/banner3.jpg";
import PopularMenu from "../Home/PopularMenu";

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={imgMenu} title={"our menu"} />
      <PopularMenu />
    </>
  );
};

export default Menu;
