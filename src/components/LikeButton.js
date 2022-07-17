import { React, useState } from 'react';

export default function LikeButton({ number1, number2 }) {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  function random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      'rgba(' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      o(r() * s) +
      ',' +
      r().toFixed(1) +
      ')'
    );
  }
  function handleClick1() {
    console.log('click');
    setCount((currentState) => currentState + 1);
  }
  function handleClick2() {
    console.log('click');
    setCount1((currentState) => currentState + 1);
  }
  return (
    <>
      <div className="m-5 element-block">
        <button
          onClick={handleClick1}
          style={{ backgroundColor: `${random_rgba()}` }}
          className="py-15 px-50"
        >
          {count}
          Likes
        </button>
        <button
          onClick={handleClick2}
          style={{ backgroundColor: `${random_rgba()}` }}
          className="py-15 px-50"
        >
          {count1}
          Likes
        </button>
      </div>
    </>
  );
}
