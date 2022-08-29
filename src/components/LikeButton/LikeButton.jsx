import { useState } from 'react'
import './LikeButton.css'

function LikeButton() {
  const [count, setCount] = useState(0)
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
  let colorLike = "purple"
  let numRandom = Math.floor((Math.random() * (0 - 5)) + 5)

  const countUp = () => setCount(countPrev => countPrev + 1)

  if (count === 0) {
    colorLike = colors[0]
  } else if (count === 1) {
    colorLike = colors[1]
  } else if (count === 2) {
    colorLike = colors[2]
  } else if (count === 3) {
    colorLike = colors[3]
  } else if (count === 4) {
    colorLike = colors[4]
  } else if (count === 5) {
    colorLike = colors[5]
  } else {
    colorLike = colors[numRandom]
  }

return (
  <div className='like-button'>
    <button className="px-4 py-1" style={{ backgroundColor: colorLike , color: 'white' }} onClick={() => {
      countUp()
    }}>{count} Likes</button>
  </div>
)
}


export default LikeButton