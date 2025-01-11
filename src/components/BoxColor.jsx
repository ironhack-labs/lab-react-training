function BoxColor({ r, g, b }) {
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
  
    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    let hexColor = rgbToHex(r, g, b);
    return (
      <div className="BoxColor" style={{ backgroundColor: hexColor }}>
        <p>
          rgb({r},{g},{b})
        </p>
        <p>{hexColor}</p>
      </div>
    );
  }
  
  export default BoxColor;