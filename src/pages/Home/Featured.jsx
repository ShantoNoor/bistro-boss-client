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
              Bistro Boss is the perfect spot for your culinary cravings!
              Located at the heart of downtown, we serve up delectable dishes
              crafted with passion and flair. Swing by our cozy establishment
              and indulge in our mouthwatering menu filled with flavorful
              delights that will tantalize your taste buds. Whether {`you're`}
              craving classic comfort food or daring culinary creations, Bistro
              Boss has got you covered. Join us for an unforgettable dining
              experience that will leave you coming back for more.
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
