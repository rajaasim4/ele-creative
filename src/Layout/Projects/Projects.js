import React from "react";
import "./Projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import project1 from "../../Assests/project1.png";
import project2 from "../../Assests/project2.png";
import project3 from "../../Assests/project3.png";
import project4 from "../../Assests/project4.png";
import project5 from "../../Assests/project5.png";
const Projects = () => {
  return (
    <div className="Projects">
      <div className="Projects_heading">
        <span>PROJECTS</span>
        <h2>Cases We Have Worked On</h2>
      </div>
      <div className="Projects_main">
        <Swiper
          spaceBetween={50}
          autoplay={true}
          loop={true}
          breakpoints={{
            // when window width is >= 320px
            319: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            427: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            769: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1025: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <ProjectCards imgsrc={project1} title={"Book Publishing"} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCards imgsrc={project2} title={"Market Analysis"} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCards imgsrc={project3} title={"Skincare Products"} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCards imgsrc={project4} title={"Market Intelligence"} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCards imgsrc={project5} title={"Market Intelligence"} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCards imgsrc={project4} title={"Market Intelligence"} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const ProjectCards = (props) => {
  let date = new Date().toLocaleDateString();
  return (
    <>
      <div className="Projects_sub">
        <img src={props.imgsrc} alt={props.imgsrc} />
        <h2>{props.title}</h2>
        <span>{date}</span>
      </div>
    </>
  );
};

export default Projects;
