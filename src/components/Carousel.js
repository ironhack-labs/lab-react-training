import { useState } from 'react';


const Carousel = ({ imgs }) => {

  const [idx, setIdx] = useState(0);

  const handleClickLeft = () => {

    setIdx(idx < imgs.length - 1 ? idx + 1 : 0);
  };

  const handleClickRight = () => {
    setIdx(idx > 0 ? idx - 1 : imgs.length - 1);

  };

  return (
    <div className="carousel">
      <img src={imgs[idx]} alt='' className="carou-img"/><br></br>
      <button onClick={handleClickLeft} className="buton-caro">Left</button>
      <button onClick={handleClickRight} className="buton-caro">Right</button>
    </div>
  );
};

export default Carousel;