import React, { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

const RGBColorPicker = () => {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const handleColorChange = (color, value) => {
    switch (color) {
      case "r":
        setRValue(value);
        break;
      case "g":
        setGValue(value);
        break;
      case "b":
        setBValue(value);
        break;
      default:
        console.log(`Invalid color: ${color}`);
    }
  };

  const fullColor = `rgb(${rValue},${gValue},${bValue})`;

  return (
    <div>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(e) => handleColorChange("r", e.target.value)}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(e) => handleColorChange("g", e.target.value)}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(e) => handleColorChange("b", e.target.value)}
      />
      <div
        style={{
          backgroundColor: fullColor,
          width: "200px",
          height: "200px",
        }}
      ></div>
      <p>{fullColor}</p>
    </div>
  );
};

export default RGBColorPicker;
