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
        break;
    }
  };

  return (
    <div className="rgb-color-picker">
      <SingleColorPicker color="r" value={rValue} onChange={handleColorChange} />
      <SingleColorPicker color="g" value={gValue} onChange={handleColorChange} />
      <SingleColorPicker color="b" value={bValue} onChange={handleColorChange} />

      <div
        className="color-preview"
        style={{ backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})` }}
      >
        RGB({rValue}, {gValue}, {bValue})
      </div>
    </div>
  );
};

export default RGBColorPicker;
