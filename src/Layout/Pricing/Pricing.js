import React from 'react'
import './Pricing.css';
import pricing_man from '../../Assests/pricing_man.png'
import pricing_girl from '../../Assests/pricing_girl.png'
import c1 from '../../Assests/c1.png'
import c2 from '../../Assests/c2.png'
import p1 from '../../Assests/p1.png'
import p2 from '../../Assests/p2.png'
import p3 from '../../Assests/p3.png'
import {GiCheckMark} from 'react-icons/gi'
const Pricing = () => {
  return (
    <div className="Pricing">
        <div className="Services_heading Pricing_heading">
    <span>
    SPECIAL OFFERS
    </span>
    <h2>

    Pricing & plans
    </h2>
  </div>
  <div className="Pricing_top">
    <div className="Pricing_image">
        <img src={pricing_man} alt={pricing_man} />
    </div>
    <div className="Pricing_Cards">
        <img src={c1} alt={c1} />
        <h4>Startup Plan</h4>
        <p>Cancel anytime. The billing only starts after you use up your free reports</p>
       
        <h2>$250
            <span>/Month</span>
        </h2>
        <ul>
            <li><span>
                <GiCheckMark/>
                
                </span>
                Photo sharing school</li>
            <li><span>
                 <GiCheckMark/></span>Drop out ramen hustle</li>
   </ul>
        <a href="#">Get Started Now</a>
    </div>
    <div className="Pricing_Cards">
        <img src={c2} alt={c2} />
        <h4>Premium Plan</h4>
        <p>Cancel anytime. The billing only starts after you use up your free reports</p>
       
        <h2>$450
            <span>/Month</span>
        </h2>
        <ul>
            <li><span>
                <GiCheckMark/>
                
                </span>
                Photo sharing school</li>
            <li><span>
                 <GiCheckMark/></span>Drop out ramen hustle</li>
            <li><span>
                 <GiCheckMark/></span> Coworking viral landing</li>
            <li><span>
                 <GiCheckMark/></span>Crush revenue traction</li>
            <li><span>
                 <GiCheckMark/> </span>User base minimum viable</li>
        </ul>
        <a href="#">Get Started Now</a>
    </div>
  </div>
  <div className="Pricing_bottom">
    <div className="Pricing_bottom_left">
        <PricingBottomCards bg={"#AD65FF"} title={"Quality Analysis"} imgsrc={p1} para={"Receive services and products with the utmost high quality. We will analyze every aspect and not let anything slip through the cracks."}/>
        <PricingBottomCards bg={"#FFA941"} title={"In Depth Production"} imgsrc={p2} para={"Get in-depth and carefully crafted web development facilities needed to create an optimized, professional, and high-converting website."}/>
        <PricingBottomCards bg={"#FF48CF"} title={"24/7 Support"} imgsrc={p3} para={"We are here to provide you with 24/7 dedicated support about any possible queries and assistance that you might need creatively."}/>
    </div>
    <div className="Pricing_bottom_right">
        <div className="Pricing_right_heading">
            <span>WHY ELECREATIVE</span>
            <h2>
            Dedicated Service At All Times
            </h2>
        </div>
        <img src={pricing_girl} alt={pricing_girl} />
    </div>
  </div>
    </div>
  )
}

const PricingBottomCards=(props)=>{
    const {imgsrc,title,para,bg}=props;
    return(
        <>
        <div className="Pricing_left_Card" style={{backgroundColor:bg}}>
        {/* <img src={pricing_girl} alt={pricing_girl} /> */}
 
            <img src={imgsrc} alt={imgsrc} />
        <h4>{title}</h4>
        <p>{para}</p>
        
        
        
        
        </div>
        
        </>

    )
}
export default Pricing