import { useState } from 'react';

function Carousel(props) {
  const [state, setState] = useState(0);

  function pressedRight(event) {
    if (state + 1 < props.images.length) {
      setState(state + 1);
    }
  }

  function pressedLeft(event) {
    if (state - 1 >= 0) {
      setState(state - 1);
    }
  }

  return (
    <div>
      <img src={props.images[state]} />
      <button onClick={pressedLeft}>Left</button>
      <button onClick={pressedRight}>Right</button>
    </div>
  );
}

export default Carousel;
