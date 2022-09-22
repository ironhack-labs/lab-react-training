import './BoxColor.css';
import DriverCard from './../DriverCard/DriverCard';

const BoxColor = ({ r, g, b }) => {
  function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? '0' + hexadecimal : hexadecimal;
  }

  function ConvertRGBtoHex(r, g, b) {
    return '#' + ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
  }

  const BoxColorStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div style={BoxColorStyle} className="BoxColor-container">
      <p>
        rgb({r}, {g}, {b})
      </p>
      <p>
        {ConvertRGBtoHex(r, g, b)}
      </p>
    </div>  
  );
};

export default BoxColor;
