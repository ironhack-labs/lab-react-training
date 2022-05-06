import { rgbToHex } from '../utils/utilities.js';

const BoxColor = ({ r, g, b }) => {
  return (
    <div style={{ backgroundColor: rgbToHex(r, g, b) }}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
};

export default BoxColor;
