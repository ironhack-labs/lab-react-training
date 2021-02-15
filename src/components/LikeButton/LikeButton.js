import React from "react";


const colors = ['purple','blue','green','yellow','orange','red']


function LikeButton({textcolor}){
  const [likes, setLikes] = React.useState(0)
  const [backColor, setBack] = React.useState(colors[0])
  let [count, setCount] = React.useState(0)


  const handleClick = () => {
    if (count < colors.length){
      count++;
    } else{
      count = 0;
    }
    setCount(count)
    setBack(colors[count])
    setLikes(likes +1)
  }
  
  return(
    <button style={{ color: textcolor, backgroundColor: backColor}} onClick={handleClick}>{likes} likes</button>
  )
}

export default LikeButton