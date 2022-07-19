import React from 'react'
import './Logo.css';
import logo1 from '../../Assests/logo1.png';
import logo2 from '../../Assests/logo2.png';
import logo3 from '../../Assests/logo3.png';
import logo4 from '../../Assests/logo4.png';
import logo5 from '../../Assests/logo5.png';
import news from '../../Assests/news.png'
const Logo = () => {
  return (
    <div className="Logo">
       <div className="Logo_sub">
        <img src={logo1} alt={logo1} />
      
       </div>
       <div className="Logo_sub">
        <img src={logo2} alt={logo2} />
     
       </div>
       <div className="Logo_sub">
        <img src={logo3} alt={logo3} />
       
       </div>
       <div className="Logo_sub">
        <img src={logo4} alt={logo4} />    
       </div>
       <div className="Logo_sub">
        <img src={logo5} alt={logo5} />
     
       </div>
       
    </div>
  )
}

export default Logo