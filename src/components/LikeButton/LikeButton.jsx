import { useState } from 'react'
import './LikeButton.css'

function LikeButton() {
  const [count, setCount] = useState(0)
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

  const countUp = () => setCount(countPrev => countPrev + 1)

  return (
    <div className='like-button'>
      <button className="px-4 py-1" style={{ backgroundColor: colors[count % colors.length], color: 'white' }} onClick={countUp}>
        {count} Likes
      </button>
    </div>
  )
}

export default LikeButton