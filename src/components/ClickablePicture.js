import React from 'react'
import { useState } from 'react';
import './ClickablePicture.css';

function ClickablePicture({ img, imgClicked }) {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <img src={selected ? imgClicked : img} alt="" />
      <button onClick={() => setSelected(!selected)}> Click</button>
    </>
  );
}

export default ClickablePicture