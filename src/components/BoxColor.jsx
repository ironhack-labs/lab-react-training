export default function BoxColor(props) {
  const valueToHex = (c) => {
    return c.toString(16).padStart(2, '0');
  };
  const convertToHexColor = (r, g, b) => {
    return `#${valueToHex(r)}${valueToHex(g)}${valueToHex(b)}`;
  };
  return (
    <div
      className="box-color box"
      style={{ backgroundColor: convertToHexColor(props.r, props.g, props.b) }}
    >
      <div className="box-color__element">
        rgb({props.r},{props.g},{props.b})
      </div>
      <div className="box-color__element">
        {convertToHexColor(props.r, props.g, props.b)}
      </div>
    </div>
  );
}
