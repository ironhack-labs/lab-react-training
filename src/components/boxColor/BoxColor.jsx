import { useEffect, useState } from 'react';
import './boxColor.css';

const BoxColor = ({ r, g, b }) => {
  const [colorHex, setColorHex] = useState([]);

  useEffect(() => {
    let R = r.toString(16);
    let G = g.toString(16);
    let B = b.toString(16);

    if (R === '0') R += '0';
    if (G === '0') G += '0';
    if (B === '0') B += '0';

    const hex = [R, G, B];

    setColorHex(hex);
  }, [r, g, b]);

  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  return (
    <div style={divStyle} className="boxcolor-container">
      <h2>
        rgb({r}, {g}, {b})
      </h2>
      <h2>#{colorHex}</h2>
    </div>
  );
};

BoxColor.defaultProps = {
  r: 100,
  g: 100,
  b: 100,
};

export default BoxColor;
