import Banner from "./Banner";
import Catagory from "./Catagory";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";
import Title from "../shared/Title";

const Home = () => {
  return (
    <>
      <Title>Home</Title>
      <Banner />
      <Catagory />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;
