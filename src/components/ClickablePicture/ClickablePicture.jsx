/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ClickablePicture.css";

const ClickablePicture = ({ img, imgClicked }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <img
        className="trump"
        onClick={() => setClicked(!clicked)}
        src={img}
        alt="Picture Trump"
      />
      {clicked && <img className="glasse" src={imgClicked} alt="Sun Glasses" />}
    </>
  );
};

export default ClickablePicture;
