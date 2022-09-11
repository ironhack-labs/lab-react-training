const BoxColor = ({ r, g, b }) => {
  const background = `rgb(${r},${g},${b})`;
  const componentToHex = (component) => {
    const hex = component.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  const rgbToHex = (r, g, b) => {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };
  return (
    <div
      className="box"
      style={{ background: background, border: 'solid 1px' }}
    >
      <div>{background}</div>
      <div>{rgbToHex(r, g, b)}</div>
    </div>
  );
};

export default BoxColor;

// r: A number between 0 and 255 representing the amount of red
// g: A number between 0 and 255 representing the amount of green
// b: A number between 0 and 255 representing the amount of blue

// <BoxColor r={255} g={0} b={0} />
// <BoxColor r={128} g={255} b={0} />
