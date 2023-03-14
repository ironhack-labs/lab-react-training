import { useState } from "react"
import "./../App.css"
function LikeButton () {
    const [clickedTimes,setClickedTimes] = useState(0)
    const [buttonStyle,setButtonStyle] = useState("purple")

const increaseLikes = (e) => {
   const newClickedTimes = clickedTimes + 1; 
   setClickedTimes(newClickedTimes)

}

    const colorsArr = ['purple','blue','green','yellow','orange','red']
    const newColor = colorsArr[Math.floor(Math.random() * 6)];
 
    return(

    <div className="button">

<label for="like-button"> 
 
  <button style={{backgroundColor: newColor}} onClick={increaseLikes}   id="like-button">{clickedTimes} Likes</button>
 
 </label>


    </div>

)


}


export default LikeButton;