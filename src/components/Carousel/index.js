import { useState } from 'react';
import './index.css';

export const Carousel = ({images}) => {
  console.log(images[0]);
  const [index, setIndex] = useState(0)
  const handleClickLeft = () =>{
    if(index === 0) {
      setIndex(images.length - 1);
  } else {
      setIndex(index - 1);
  }

  }
  const handleClickRight = () =>{
    if(index >= images.length - 1) {
      setIndex(0);
  } else {
      setIndex(index + 1);
  }
  }
  return (
    <div className="Carousel">
      <button onClick={()=> handleClickLeft()}>Left</button>
      <img src={images[index]} alt="Images" />
      <button onClick={()=>handleClickRight()}>Rigth</button>
    </div>
  );
};
