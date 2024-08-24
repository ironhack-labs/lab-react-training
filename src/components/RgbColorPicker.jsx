import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const rgbColor = `rgb(${rValue}, ${gValue}, ${bValue})`;

  return (
    <div style={styles.container}>
      {/* Render SingleColorPicker for each color */}
      <div style={styles.container}>
        <SingleColorPicker
          color="r"
          value={rValue}
          onChange={(newValue) => setRValue(newValue)}
        />
        <SingleColorPicker
          color="g"
          value={gValue}
          onChange={(newValue) => setGValue(newValue)}
        />
        <SingleColorPicker
          color="b"
          value={bValue}
          onChange={(newValue) => setBValue(newValue)}
        />
      </div>

      {/* Display the final RGB color */}
      <div style={styles.output}>
        <div style={{ ...styles.colorBox, backgroundColor: rgbColor }} />
        <p>{rgbColor}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    width: "300px",
    margin: "20px auto",
    textAlign: "center",
  },
  output: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  colorBox: {
    width: "50px",
    height: "50px",
    marginRight: "10px",
    border: "1px solid #ccc",
  },
};

export default RGBColorPicker;
