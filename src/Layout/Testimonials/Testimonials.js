import React from "react";
import "./Testimonials.css";
import t1 from "../../Assests/t1.png";
import t2 from "../../Assests/t2.png";
import t3 from "../../Assests/t3.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Testimonials = () => {
  return (
    <div className="Testimonials">
      <div className="Testimonials_heading">
        <span>TESTIMONIALS</span>
        <h2>Hear What Our Client’s Say</h2>
      </div>
      <div className="Testimonial_sub">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          //   navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <TestimonialComponent imgsrc={t1} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialComponent imgsrc={t2} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialComponent imgsrc={t3} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
const TestimonialComponent = (props) => {
  return (
    <>
      <div className="Testimonial_main">
        <img src={props.imgsrc} alt={props.imgsrc} />
        <p>
          EleCreative has helped us with everything from brand design to video,
          photography, writing, web, and print over the years. Projects are
          always tackled with zeal, care, and a commitment to completing them on
          time and on budget.
        </p>
      </div>
    </>
  );
};

export default Testimonials;
