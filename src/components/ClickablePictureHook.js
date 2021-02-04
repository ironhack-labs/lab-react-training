import React, { useState } from 'react';

export default function ClickablePictureHook({ img, imgClicked }) {
  const [clicked, setClicked] = useState(false);
  const [pic, setPic] = useState('empty');

  if (pic === 'empty') {
    //Cargue de condiciones iniciales
    setPic(img);
  }

  function ponerImg() {
    if (clicked) {
      setClicked(false);
      setPic(img);
    } else {
      setClicked(true);
      setPic(imgClicked);
    }
  }

  return (
    <div className="picCont">
      <img src={pic} onClick={ponerImg} />
    </div>
  );
}
