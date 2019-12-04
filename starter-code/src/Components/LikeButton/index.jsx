import React from 'react';

import './style.css';

let count = 0

function incrementCount(){
  count +=1
}

function LikeButton (data) {
  console.log("COUNT", count)
    return (
   <button onClick= {incrementCount()} >{count}Likes</button>
    )
}

export default LikeButton;

