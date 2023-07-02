const BoxColor = (props) => {
  function rgbToHex(r, g, b) {
    const componentToHex = (color) => {
      const hex = color.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    const rHex = componentToHex(r);
    const gHex = componentToHex(g);
    const bHex = componentToHex(b);

    return `#${rHex}${gHex}${bHex}`;
  }

  return (
    <div>
      <div
        className="card"
        style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}
      >
        <div>
          <p>
            rgb({props.r},{props.g},{props.b})
          </p>
        </div>
        <div>
          <p>{rgbToHex(props.r, props.g, props.b)}</p>
        </div>
      </div>
    </div>
  );
};

export default BoxColor;
