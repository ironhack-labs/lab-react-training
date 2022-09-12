
import { useState } from 'react'

const colors = ['purple','blue','green','yellow','orange','red'];

function LikeButton(){

  const [likes, setLikes] = useState(0)

  const  handleLikeUP = () => setLikes((countPrev) => countPrev + 1) 

  return(
    <button className='btn  m-1 border' onClick={handleLikeUP} style={{backgroundColor: colors[(likes % colors.length)], color: 'white'}}>
      {likes} Likes
    </button>
  )
}

export default LikeButton