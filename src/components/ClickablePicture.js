import React from 'react';
import { useState } from 'react';

function ClickablePicture(props) {
  let [isClicked, setClicked] = useState(false);
  return (
    <div>
      <img
        onClick={() => setClicked(!isClicked)}
        src={isClicked ? props.imgClicked : props.img}
      />
    </div>
  );
}
export default ClickablePicture;
