import React, { useState } from "react";
import "../App.css";

export default function ClickablePicture(props) {
  const { img, imgClicked, onClick } = props;
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  let currentPic = clicked ? imgClicked : img;

  return (
    <div>
      <img
        onClick={handleClick}
        style={{ height: '150px' }}
        src={currentPic}
        alt="click"
      />
    </div>
  );
}
