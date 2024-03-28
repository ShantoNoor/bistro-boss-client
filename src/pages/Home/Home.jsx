import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Catagory from "./Catagory";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Catagory />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;
