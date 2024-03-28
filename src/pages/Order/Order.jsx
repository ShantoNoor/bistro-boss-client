import { useState } from "react";
import imgCover from "../../assets/shop/banner2.jpg";
import Cover from "../shared/Cover";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard";
import { useParams } from "react-router-dom";
import Title from "../shared/Title";

const Order = () => {
  const categories = ["salad", "soup", "pizza", "dessert", "drink"];
  const { category } = useParams();
  const ii = categories.indexOf(category);
  const [index, setIndex] = useState(ii);
  const { salad, soup, pizza, dessert, drink, loading } = useMenu();

  if (loading) return <span className="loading loading-bars h-40 w-40 mx-auto block"></span>;

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center gap-4 my-12">
            {salad.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center gap-4 my-12">
            {soup.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center gap-4 my-12">
            {pizza.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center gap-4 my-12">
            {dessert.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-items-center gap-4 my-12">
            {drink.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Order;
