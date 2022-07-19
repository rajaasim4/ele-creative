import React from 'react'
import './NewsLetter.css'
import newsLetter from '../../Assests/newsLetter_main.png';
import news from '../../Assests/news.png';
const NewsLetter = () => {
  return (
    <div className="NewsLetter">
        <div className="NewsLetter_left">
            <img src={newsLetter} alt={newsLetter} />
        </div>
        <div className="NewsLetter_right">
            <span>
NEWSLETTER</span>
<h2>Subscribe To Our Newsletter To Get The Latest Updates</h2>
        <div className="NewsLetter_input">

        <input type="email"  placeholder='Your Email  Address'/>
      <button>Subscribe</button>
        </div>
    <div className="NewsLetter_img">
        <img src={news} alt={news} />
    </div>
        </div>
    </div>
  )
}

export default NewsLetter