import React, { useState } from 'react'

export const LikeButton = () => {
 const [colorNumber, setColorNumber] = useState(0);

 const colors = [
   'blue',
   'orange',
   'green',
   'teal',
   'red',
   'yellow',
 ];

 return (
   <div>
     <button
       style={{ background: colors[colorNumber % colors.length] }}
       onClick={() => {
         setColorNumber(colorNumber + 1);
       }}
     >
       {colorNumber} Likes
     </button>
   </div>
 );
}
