import SectionTitle from "../../components/SectionTitle";
import img1 from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <>
      <div className="feature-bg-img bg-fixed pt-12 text-white">
        <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />

        <div className="md:flex justify-center items-center pb-32 pt-12 px-28 gap-4">
          <div>
            <img src={img1} />
          </div>
          <div className="relative p-5">
            <p>March 20, 2023</p>
            <h6>WHERE CAN I GET SOME?</h6>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </div>
            <button className="btn btn-outline border-0 border-b-4">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
