// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

const Catagory = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12"
      >
        <SwiperSlide>
          <img src={slide1} />
          <h6 className="text-4xl text-center -mt-12 uppercase text-white shadow-md">
            Salads
          </h6>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h6 className="text-4xl text-center -mt-12 uppercase text-white shadow-md">
            Pizzas
          </h6>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h6 className="text-4xl text-center -mt-12 uppercase text-white shadow-md">
            Soups
          </h6>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h6 className="text-4xl text-center -mt-12 uppercase text-white shadow-md">
            Desserts
          </h6>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <h6 className="text-4xl text-center -mt-12 uppercase text-white shadow-md">
            Salads
          </h6>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Catagory;
