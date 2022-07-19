import React from 'react'
import './Services.css';
import s1 from '../../Assests/s1.png'
import s2 from '../../Assests/s2.png'
import s3 from '../../Assests/s3.png'
import s4 from '../../Assests/s4.png'
import s5 from '../../Assests/s5.png'
import s6  from '../../Assests/s6.png'
import s7 from '../../Assests/s7.png'
import r1 from '../../Assests/r1.png'
import r2 from '../../Assests/r2.png'
import r3 from '../../Assests/r3.png'
import r4 from '../../Assests/r4.png'
import services_main from '../../Assests/services_main.png'

const Services = () => {
  return (
  <div className="Services">
  <div className="Services_heading">
    <span>
    OUR SERVICES
    </span>
    <h2>

Outstanding Services We Provide
    </h2>
  </div>
  <div className="Services_main">

  <div className="Services_top">
    <ServicesCard imgsrc={s1} title={"Web Development"} para={"We will provide you with all web development facilities to help you create an optimized, professional, and high-converting website."}/>
    <ServicesCard imgsrc={s2} title={"Design & Outlook"} para={"With stunning designs and striking colors, we will help you create websites that will instantly catch visitors’ eyes and increase engagement rates."}/>
    <ServicesCard imgsrc={s3} title={"Digital Marketing"} para={"We will let you plan and create all possible strategies to creatively market your products and services to the customers and increase leads."}/>
    <ServicesCard imgsrc={s4} title={"SEO Services"} para={"EleCreative also brings you some of the best methods and strategies needed to improve visibility and SEO scores, ensuring you get high traffic."}/>
    

  </div>
  <div className="Services_bottom">
  <div className="Services_heading Service_bottom_heading">
    <span>
    HOW WE DO IT
    </span>
    <h2>

    Our Work Process?
    </h2>
  </div>
    <div className="Services_bottom_main">
  <div className="Services_bottom_left">

    <ServiceBottomMain imgsrc={r1} title={"Advertising & marketing"} para={"We will let you plan and create all possible strategies to creatively market your products and services to the customers and increase leads."}/>
    <ServiceBottomMain imgsrc={r2} title={"Web development"} para={"We will provide you with all web development facilities to help you create an optimized, professional, and high-converting website."}/>
    <ServiceBottomMain imgsrc={r3} title={"App Development"} para={"Get instant helpful resources to convert your website and business into an outstanding application that is fully responsive on any device."}/>
    <ServiceBottomMain imgsrc={r4} display={"hidden"} title={"Search engine optimization"} para={"EleCreative also brings you some of the best methods and strategies needed to improve visibility and SEO scores, ensuring you get high traffic."}/>
  </div>
  <div className="Services_bottom_right">
    <img src={services_main} alt={services_main} />
  </div>
  </div>

  </div>
  </div>
  <div className="Services_img1 Services_img">

    <img src={s5} alt={s5} />
  </div>
  <div className="Services_img2 Services_img">
    <img src={s6} alt={s6} />
  </div>
  <div className="Services_img3 Services_img">
    <img src={s7} alt={s7} />
  </div>

  </div>
  )
}
const ServicesCard=(props)=>{
  return(
    <>
    <div className="Services_Cards">
      <img src={props.imgsrc} alt={props.imgsrc} />
      <h2>{props.title}</h2>
      <p>{props.para}</p>
    </div>
    </>
  )
}
const ServiceBottomMain=(props)=>{
  return(<>
    <div className="Services_bottom_left_main">
      <div className="bottom_main_left">
      

        <img src={props.imgsrc} alt={props.imgsrc} />
       
     <div className="Service_line" style={{visibility:props.display}}>

     </div>
      </div>
      <div className="bottom_main_right">
        <h3>
     {props.title}
        </h3>
        <p>{props.para}</p>
      </div>
    </div>
    
    </>
  )
}

export default Services