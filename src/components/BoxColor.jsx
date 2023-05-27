function toHex(d) {
  if (d < 0) {
    return '00';
  }
  if (d > 255) {
    return 'FF';
  }
  return ('0' + Number(d).toString(16)).slice(-2).toUpperCase();
}

function BoxColor(props) {
  const divBackColor = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
  };
  const hexaColor = toHex(props.r) + toHex(props.g) + toHex(props.b);
  return (
    <div className="boxColor" style={divBackColor}>
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <p>#{hexaColor}</p>
    </div>
  );
}

export default BoxColor;
