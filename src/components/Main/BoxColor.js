//BoxColor
const BoxColor = ({ r, g, b }) => {
  
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
