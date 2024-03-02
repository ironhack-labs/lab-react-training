import { useState } from "react";
export default function LikeButton() {
  let [likes, setLikes] = useState(0);
  const [bgColor, setBgColor] = useState("purple")

  
  const changeBackground = () => {
    let backgroundColors = ["purple", "blue", "green", "yellow", "orange", "red"];
    let randomIndex = Math.floor(Math.random() * backgroundColors.length);
    let randomBgColor = backgroundColors[randomIndex];
    setBgColor(randomBgColor)
  }

  const incrementLikes = () => {
    likes++;
    console.log(likes);
    setLikes(likes);
    changeBackground();
  }
    
  const buttonStyle = {
    backgroundColor: `${bgColor}`,
    color: bgColor === "yellow" ? "black" : "white"
  }

  return (
    <div className="button">
        <button style={buttonStyle} onClick={incrementLikes}>{likes} Likes</button>
    </div>
  )
}
