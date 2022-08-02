import React, { useState } from 'react';

function LikeButton(){
    let cols =['purple','blue','green','yellow','orange','red']

    const [count, setCount] = useState(0);
    const [color, setColor] = useState(cols[1]);

    return(   
    <div >
        <button className={color} onClick={(e)=> {
            setColor((prevColor) => cols[cols.indexOf(prevColor) + 1])
            setCount((prevCount) => prevCount + 1)}}>
            {count} Likes
        </button>
    </div>)
}

/* function LikeButton() {
  const [countUp, setCountUp] = useState(0);

  return (
    <button className="like-button" onClick={() => setCountUp(countUp + 1)}>
      {`${countUp}`} Likes
    </button>
  );
} */

export default LikeButton;
