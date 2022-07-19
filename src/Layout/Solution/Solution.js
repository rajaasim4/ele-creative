import React from 'react'
import './Solution.css'
import solution_main from '../../Assests/solution_main.png'
import solution_img1 from '../../Assests/solution_img1.png'
import solution_img2 from '../../Assests/solution_img2.png'
const Solution = () => {
  return (
   <div className="Solution">
    <div className="Solution_left">
      <span>
      EVERYTHING YOU NEED
      </span>
      <h2>
      We Provide Ready Solutions
      </h2>
      <p>
      EleCreative is here to help with all your creative needs - everything you need from development processes, 
      creative designing, extensive coding facilities, engaging marketing strategies, and more.
      </p>
      <div className="Solution_Bars">
       <SolutionBars bg={"#B87AFF"} title={"Development"} percent={89} width={"89%"}/>
       <SolutionBars bg={"#40D7E1"} title={"Optimization"} percent={73} width={"73%"}/>
       <SolutionBars bg={"#FFA941"} title={"Advertising"} percent={65} width={"65%"}/>
       
      </div>
    </div>
    <div className="Solution_right">
      <img src={solution_main} alt={solution_main} />
    </div>
    <div className="Solution_img Solution_img1">
      <img src={solution_img1} alt={solution_img1} />
    </div>
    <div className="Solution_img Solution_img2">
      <img src={solution_img2} alt={solution_img2} />
    </div>
   </div>
  )
}
const SolutionBars=(props)=>{
  return(<>
   <label htmlFor="">{props.title}</label>
      <div className="Solution_Bars_outer">
      <div className="Solution_Bars_inner" style={{backgroundColor:props.bg,width:props.width}}>
        <span>{props.percent}%</span>

      </div>
      </div>
  
  
  </>)
}

export default Solution