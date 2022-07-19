import React from 'react'
import './Banner.css'
import Banner_team from '../../Assests/Banner_team.png'
import banner_dots from '../../Assests/banner_dots.png'
const Banner = () => {
  return (
    <div className="Banner">
      
       <div className="Banner_main">
        <div className="Banner_main_left">
            <div className="Banner_main_left_top">
                <div className="left_top_left">
                  <p>Innovative</p>

                </div>
                <div className="left_top_right">
                  <p>Ideas that matter</p>
                </div>

            </div>
            <h1>Powerhouse Of Creativity & Innovation</h1>
            <p>EleCreative is your one-stop creative marketing agency that sp
                ecializes in converting your ideas into powerful innovations.</p>
                <a href="#">Book A Demo</a>
        </div>
        <div className="Banner_main_right">
          <img src={Banner_team} alt={Banner_team} />
        </div>
       </div>
       <div className="Banner_widget">
        <img src={banner_dots} alt={banner_dots} />
       </div>
    </div>
  )
}

export default Banner