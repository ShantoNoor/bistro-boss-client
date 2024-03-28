import { useState } from "react";
import imgCover from "../../assets/shop/banner2.jpg";
import Cover from "../shared/Cover";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Cover img={imgCover} title={"Order food"} />

      <Tabs defaultIndex={index} onSelect={(idx) => setIndex(idx)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Soup</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Offered</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Order;
