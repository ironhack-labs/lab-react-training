function BoxColor({ r, g, b }) {
  const bgColor = {
    backgroundColor: `rgba(${r},${g},${b})`,
  };

  const rgbToHex = (r, g, b) =>
    '#' +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join('');

  return (
    <div>
      <p
        className="card fs-4 w-25 border border-3 border-dark m-3 p-3 text-center"
        style={bgColor}
      >
        rgb({r},{g},{b})<div>{rgbToHex(r, g, b)}</div>
      </p>
    </div>
  );
}

export default BoxColor;
