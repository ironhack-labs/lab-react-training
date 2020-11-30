import React, {useState} from 'react'

const LikeButton = (props) => {
  const [count, setCount] = useState(0)
  let colors = ['purple','blue','green','yellow','orange','red']

  return (  
      <button style={{backgroundColor: colors[count%colors.length]}} onClick={() => setCount(count + 1)}>{count} Likes</button>
  )
}

export default LikeButton