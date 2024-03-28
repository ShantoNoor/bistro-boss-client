import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import imgMenu from "../../assets/menu/banner3.jpg";
import imgDessert from "../../assets/menu/dessert-bg.jpeg";
import imgPizza from "../../assets/menu/pizza-bg.jpg";
import imgSoup from "../../assets/menu/soup-bg.jpg";
import imgSalad from "../../assets/menu/salad-bg.jpg";

import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={imgMenu} title={"our menu"} />

      <SectionTitle heading={"Today's offer"} subHeading={"Don't miss"} />
      <MenuCategory items={offered} />

      <MenuCategory items={dessert} title={'dessert'} coverImg={imgDessert} />
      <MenuCategory items={pizza} title={'pizza'} coverImg={imgPizza} />
      <MenuCategory items={soup} title={'soup'} coverImg={imgSoup} />
      <MenuCategory items={salad} title={'salad'} coverImg={imgSalad} />
    </>
  );
};

export default Menu;
