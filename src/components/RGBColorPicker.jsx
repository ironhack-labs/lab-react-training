import React, { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleChange = (color, value) => {
    console.log("handleChange");
    const numbericValue = Number(value);
    if (color === "r") setRValue(numbericValue);
    if (color === "g") setGValue(numbericValue);
    if (color === "b") setBValue(numbericValue);
  };

  return (
    <div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(color, value) => {
          handleChange(color, value);
        }}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(color, value) => {
          handleChange(color, value);
        }}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(color, value) => {
          handleChange(color, value);
        }}
      />
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
        }}
      ></div>
    </div>
  );
}

export default RGBColorPicker;
