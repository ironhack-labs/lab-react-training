import React from 'react'
import { useState } from 'react';

 function LikeButton() {

const [initialLikes, addLikes] = useState(0);
//set up the flag to change colors onClick.
//the number before the ? has to be equal to the final array index so that it cycles through the entire array.
const colors = ['purple','blue','green','yellow','orange','red']
const [flag, setFlag] = useState(0);
const handleClick = () => {
    setFlag(flag === 5 ?  0 : flag + 1);
    addLikes((prevCount) => 
        prevCount + 1)
}

return (

    <div>
        <button style={{ backgroundColor: colors[flag], color: 'white' }} onClick={handleClick}> {initialLikes} LIKE(S)</button>
        
    </div>
// (e) => setAddress(e.target.value)
  )
}



export default LikeButton;