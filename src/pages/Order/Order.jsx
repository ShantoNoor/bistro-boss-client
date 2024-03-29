import { useState } from "react";
import imgCover from "../../assets/shop/banner2.jpg";
import Cover from "../shared/Cover";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import { useParams } from "react-router-dom";
import Title from "../shared/Title";
import FoodCards from "./FoodCards";

const Order = () => {
  const categories = ["salad", "soup", "pizza", "dessert", "drink"];
  const { category } = useParams();
  const ii = categories.indexOf(category);
  const [index, setIndex] = useState(ii);
  const { salad, soup, pizza, dessert, drink, loading } = useMenu();

  if (loading)
    return (
      <span className="loading loading-bars h-40 w-40 mx-auto block"></span>
    );

  return (
    <>
      <Title>Order Food</Title>
      <Cover img={imgCover} title={"Order food"} />

      <Tabs defaultIndex={index} onSelect={(idx) => setIndex(idx)}>
        <TabList
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drink</Tab>
        </TabList>

        <TabPanel>
          <FoodCards items={salad} />
        </TabPanel>
        <TabPanel>
          <FoodCards items={soup} />
        </TabPanel>

        <TabPanel>
          <FoodCards items={pizza} />
        </TabPanel>

        <TabPanel>
          <FoodCards items={dessert} />
        </TabPanel>
        <TabPanel>
          <FoodCards items={drink} />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Order;
