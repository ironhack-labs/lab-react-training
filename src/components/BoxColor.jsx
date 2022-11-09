export const BoxColor = (props) => {
  const { r, g, b } = props;

  function getContrastColor(r, g, b) {
    let yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  }

  function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    border: 'solid black',
    color: getContrastColor(r, g, b),
    padding: '20px',
  };

  return (
    <div style={divStyle}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
};
