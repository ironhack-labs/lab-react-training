/* eslint-disable react/prop-types */
import { useState } from "react";

function SingleColorPicker({ color, value, onChange }) {
  let colorBg;
  switch (color) {
    case "r":
      colorBg = `rgb(${value},0,0)`;
      break;
    case "g":
      colorBg = `rgb(0,${value},0)`;
      break;
    case "b":
      colorBg = `rgb(0,0,${value})`;
      break;
    default:
      break;
  }
  return (
    <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
      <div>
        <span>{color.toUpperCase()}: </span>
        <input
          type="number"
          min={0}
          max={255}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>

      <div
        style={{ backgroundColor: colorBg, width: "30px", height: "30px" }}
      ></div>
    </div>
  );
}

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  return (
    <div className="d-flex flex-column align-items-center">
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(value) => setRValue(value)}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(value) => setGValue(value)}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(value) => setBValue(value)}
      />
      <div
        style={{
          backgroundColor: `rgb(${rValue},${gValue},${bValue})`,
          width: "100px",
          height: "100px",
        }}
      ></div>
      rgb({rValue},{gValue},{bValue})
    </div>
  );
}

export default RGBColorPicker;
