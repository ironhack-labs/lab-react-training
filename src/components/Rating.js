import React from "react"
const Rating = (props) => {
    const {children}=props
    const auxx = Math.round(children)
  return (
    <div className="starsRating">
        {auxx === 0 && <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Star_rating_0_of_5.png" alt=""/>}
        {auxx === 1 && <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Star_rating_1_of_5.png" alt=""/>}
        {auxx === 2 && <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Star_rating_2_of_5.png" alt=""/>}
        {auxx === 3 && <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Star_rating_3_of_5.png" alt=""/>}
        {auxx === 4 && <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png" alt=""/>}
        {auxx === 5 && <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Star_rating_5_of_5.png" alt=""/>} 
    </div>
  )
}
export default Rating