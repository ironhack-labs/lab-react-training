import './BoxColor.css';

const BoxColor = ({ r, g, b }) => {
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }

  const hexValue = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

  return (
    <div className="BoxColor border-box" style={{ backgroundColor: hexValue }}>
      <p>rgb({r},{g},{b})</p>
      <p>{hexValue}</p>
    </div>
  )
}

export default BoxColor;