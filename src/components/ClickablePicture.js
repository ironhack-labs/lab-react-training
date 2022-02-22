import React from 'react';
import { useState } from 'react';

export default function ClickablePicture(props) {
  const image = './assets/images/maxence.png';
  const [img, setImage] = useState(image);

  return <img src={props.img} alt="imgs" />;
}
