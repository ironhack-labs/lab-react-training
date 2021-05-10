import React, { useState } from 'react'

const Carousel = (props) => {

  const [index, setIndex] = useState(0);

  const goBack = () => setIndex(index - 1);

  const goForward = () => setIndex(index + 1);

  return (
    <div className="id-card">
      {index > 0 && <button onClick={goBack}>{`<<<`}</button>}      
      <img src={props.imgs[index]} alt="image" />      
      {index < 3 && <button onClick={goForward}>{`>>>`}</button>}      
    </div>
  )
}

export default Carousel;
