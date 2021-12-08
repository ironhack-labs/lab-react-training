

//BoxColor
const BoxColor = ({ r, g, b }) => {
    //   function componentToHex(c) {
    //     var hex = c.toString(16);
    //     return hex.length == 1 ? '0' + hex : hex;
    //   }
  
    //   function rgbToHex(r, g, b) {
    //     return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    //   }
  
    //   const result = rgbToHex({ r }, { g }, { b });
  
    return (
      <div
        className="BoxColor box"
        style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      >
        rgb({r},{g},{b}) {}
      </div>
    );
  };
  
  export default BoxColor;
