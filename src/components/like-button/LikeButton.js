import { useState } from "react"
import "./LikeButton.css"

function LikeButton() {
  const colors = ['purple','blue','green','yellow','orange','red']
  const [count, setCount] = useState(0)
  const [countColor, setCountColor] = useState(0)

  const countUp = () => setCount((countPrev) => countPrev +1)
  const countColorUp = () => setCountColor((countPrev) => countPrev < 5 ? countPrev + 1 : countPrev = 0)
  return(
    <div>
      <button className="px-4 py-1" style={{
        backgroundColor: colors[countColor],
        color: 'white'
      }} onClick={() => {
          countUp();
          countColorUp();
          }}>{count} Likes</button>
    </div>
  )
}

export default LikeButton