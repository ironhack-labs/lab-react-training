import "./BoxColor.css";

function BoxColor({ r, g, b }) {
  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: (r + g + b) / 3 > 120 ? "black" : "white",
  };
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };
  return (
    <div className="box" style={boxStyle}>
      <p>
        rgb({r}, {g}, {b})
      </p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}

export default BoxColor;
