import SectionTitle from "../../components/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Testimonials = () => {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic("/reviews").then((res) => {
      setReviews(res.data);
      setLoading(false);
    });
  }, [axiosPublic]);

  return (
    <>
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {loading ? (
          <span className="loading loading-bars h-40 w-40 mx-auto block"></span>
        ) : (
          reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="p-6 mx-24 flex flex-col justify-center items-center gap-3">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p>{review.details}</p>
                <h6 className="text-2xl text-orange-400">{review.name}</h6>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default Testimonials;
