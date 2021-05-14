import React from 'react';

function Carousel(props) {
  const [counter, setCounter] = React.useState(0);

  const handleRight = () => (counter < 3 ? setCounter(counter + 1) : counter);

  const handleLeft = () => (counter > 0 ? setCounter(counter - 1) : counter);

  return (
    <div>
      <button onClick={handleLeft}>Left</button>
      <img src={props.imgs[counter]} />
      <button onClick={handleRight}>Right</button>
    </div>
  );
}

export default Carousel;
