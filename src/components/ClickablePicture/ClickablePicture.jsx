import "./ClickablePicture.css";
import glasses from "./../../assets/images/glasses.png";
import { useState } from "react";

function ClickablePicture(props) {
  const [curr, setCurr] = useState("display");
  const putGlasses = (e) => {
    if (curr === "display") {
      setCurr("no-display");
    } else if (curr === "no-display") {
      setCurr("display");
    }
  };

  return (
    <div className="container">

      <div className="image-container" onClick={putGlasses}>
        
        <img className="background-image" src={props.img} alt="" />
        <img className={curr} src={glasses} alt="" />

      </div>
    </div>
  );
}

export default ClickablePicture;
