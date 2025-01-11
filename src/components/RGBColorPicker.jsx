import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
      <SingleColorPicker
        color="r"
        value={rValue}
        onChange={(e) => setRValue(e.target.value)}
      />
      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={(e) => setGValue(e.target.value)}
      />
      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={(e) => setBValue(e.target.value)}
      />
      <div
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
          margin: "20px auto",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #ccc",
        }}
      >
        <p style={{ fontWeight: "bold", color: "#333", margin: 0 }}>
          {`rgb(${rValue}, ${gValue}, ${bValue})`}
        </p>
      </div>
    </div>
  );
}

export default RGBColorPicker;