import React, { useState } from 'react';

function Carousel({ images }) {
  const [num, setNum] = useState(0);

  return (
    <div>
      {num === 0 ? null : <button onClick={()=>setNum(num-1)}>last</button>}
      <img src={images[num]} alt="dice" />
      {num === images.length-1 ? null : <button onClick={()=>setNum(num+1)}>next</button>}
    </div>
  );
}

export default Carousel;
