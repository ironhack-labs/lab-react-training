import React, {useState} from 'react';



const Carousel = (props) => {
  const [state, setState] = useState({
    imgPath: props.imgs,
    index: 0
  });

  const length = state.imgPath.length
  const btnLeft = () => {
    setState({
      ...state,
      index: (state.index - 1 % length + length) % length
    })
  }
  const btnRight = () => {
    setState({
      ...state,
      index: (state.index + 1 % length + length) % length
    })
  }
  return (  
    <div className="carousel-container">
      <button onClick={btnLeft}> <i className="arrow-left" aria-hidden="true"></i> </button>
      <img src={state.imgPath[state.index]} alt=""/>
      <button onClick={btnRight}> <i className="arrow-right" aria-hidden="true"></i> </button>
    </div>
  );
}

export default Carousel;