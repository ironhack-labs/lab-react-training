import React, {useState} from 'react'

const LikeButton = (props) => {
  const [count, setCount] = useState(0)
  let colors = ['purple','blue','green','yellow','orange','red']



  return (
    <div>
  
      <button style={{width: '50px'}} onClick={() => setCount(count - 1)}>{count} Likes</button>

    </div>
  )
}

export default LikeButton