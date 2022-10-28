function BoxColor({ r, g, b }) {
  const color = (a, b, c) => {
    return `rgb(${a}, ${b}, ${c})`;
  };

  // Bonus: RGB to HEX
  // Used to decide if color is black or white
  const sum = (a, b, c) => {
    return a + b + c;
  };

  // Transforms a single rgb value into HEX
  const toHex = (n) => {
    return Math.min(Math.max(parseInt(n), 0), 255)
      .toString(16)
      .padStart(2, '0');
    // .toUpperCase();
  };

  const rgbToHex = (r, g, b) => {
    return '#' + toHex(r) + toHex(g) + toHex(b);
  };

  const divStyle = {
    backgroundColor: color(r, g, b),
    color: sum(r, g, b) > 382 ? 'black' : 'white',
  };

  return (
    <div className="box" style={divStyle}>
      <p>{color(r, g, b)}</p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}
export default BoxColor;
