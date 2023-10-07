/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ClickablePicture.css";

const ClickablePicture = ({ img, imgClicked }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="position-relative">
      <button className="border-0 bg-transparent">
        <img
          className="pe-auto"
          onClick={() => setClicked(!clicked)}
          src={img}
          alt="Picture Trump"
        />
      </button>

      {clicked && <img className="glasse" src={imgClicked} alt="Sun Glasses" />}
    </div>
  );
};

export default ClickablePicture;
