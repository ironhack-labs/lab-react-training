import React from 'react';

function Carousel(props) {
  const [index, setIndex] = React.useState(0);

  function skipForward() {
    setIndex(index + 1);
  }

  function skipBack() {
    setIndex(index - 1);
  }

  return (
    <div>
      {index > 0 && <button onClick={skipBack}>{`🔙`}</button>}
      <img src={props.imgs[index]} alt="imgs" />
      {index < 3 && <button onClick={skipForward}>{`🔜`}</button>}
    </div>
  );
}

export default Carousel;
