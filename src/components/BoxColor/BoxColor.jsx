import "./BoxColor.css";
const BoxColor = ({ r, g, b }) => {
  const rgbToHex = (r, g, b) => {
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  const hexColor = rgbToHex(r, g, b);
  
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    color: "white",
    padding: "20px",
    textAlign: "center",
  };
  return (
    <div className="box-color m-auto mb-3" style={divStyle}>
      rgb({r}, {g}, {b}) <br />
      {hexColor}
    </div>
  );
};

export default BoxColor;
