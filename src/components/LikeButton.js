import React, { useState } from 'react'

const LikeButton = () => {
    const [count, setButton] = useState(0)
    const colors = ['purple','blue','green','yellow','orange','red']
    
  return (
    <div>
        <button
            style={{backgroundColor: colors[count % colors.length]}}
            onClick={() => setButton(count + 1)}
        >
        {count} Likes
        
        </button>
        
    </div>
  )
}

export default LikeButton