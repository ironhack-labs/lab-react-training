import React from 'react';

export default function Carousel(props) {
  const [portrait, setPortrait] = React.useState(0);

  function moveForward() {
    setPortrait(portrait + 1);
  }
  function moveBack() {
    setPortrait(portrait - 1);
  }

  return (
    <div>
      {portrait > 0 && <button onClick={moveBack}>{`⏪ `}</button>}
      <img src={props.imgs[portrait]} alt="imgs" />
      {portrait < 3 && <button onClick={moveForward}>{`⏩`}</button>}
    </div>
  );
}
