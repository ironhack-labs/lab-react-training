import { useState } from "react"

function LikeButton() {
  let [numLikes, setNumLikes] = useState(0);
  let handleIncrement = () => {
    setNumLikes(numLikes + 1);
  }

  let colors = ['purple','blue','green','yellow','orange','red'];
  let randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div>
      <button onClick={() => {handleIncrement()}} style={{ backgroundColor: randomColor() }}>
        {numLikes} Likes
      </button>
    </div>
  )
}

export default LikeButton