import React from 'react';

export default function Carousel() {
  const [state, setState] = React.useState(0);
  const images = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
  ];

  function left() {
    setState(state - 1);
    if (state === 0) {
      setState(3);
    }
  }

  function right() {
    setState(state + 1);
    if (state === images.length - 1) {
      setState(0);
    }
  }

  return (
    <div>
      <button onClick={left}>Left</button>
      <img src={images[state]} alt="people" />
      <button onClick={right}>Right</button>
    </div>
  );
}
