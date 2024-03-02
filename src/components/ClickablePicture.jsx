import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function ClickablePicture({img, imgClicked}) {

  const [clicked, setClicked] = useState(false);

  const changePicture = () => {
    setClicked(!clicked);
  }

  console.log(clicked);

  return (
    <div className="images">
      <img className="alberto-pic" onClick={changePicture} src={img} />
      {clicked && <img className = "glasses" src={imgClicked} />}
    </div> 
  )
}
