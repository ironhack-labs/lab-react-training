import { useState } from 'react'
import './LikeButton.css'

const LikeButton = () => {
    const [liked, setLiked] = useState(0)
    return (
      <div className='LikeButton'>
          <button onClick={()=> setLiked(liked => ++liked)}>{liked} Likes</button>
      </div>
  )
}

export default LikeButton
