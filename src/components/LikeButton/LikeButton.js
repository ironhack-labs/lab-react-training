import {useState} from 'react'
import "./LikeButton.css"


function LikeButton () {
  const [count, setCount] = useState(0);
  const countUp = () => setCount((countPrev) => countPrev +1)
const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
const changeColors = count%colors.length

  return(
    <div className='container'>
        <div>
          <button className='btn' style={{backgroundColor:colors[changeColors]}} onClick={countUp}>{count} Likes</button> 
        </div>
    </div>

  )
}

export default LikeButton