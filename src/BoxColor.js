function colorToHex(color) {
  let hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? '0' + hexadecimal : hexadecimal;
}

function BoxColor(props) {
  const hex =
    '#' + colorToHex(props.r) + colorToHex(props.g) + colorToHex(props.b);

  return (
    <div style={{ textAlign: 'center', backgroundColor: hex, color: 'white' }}>
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <p>{hex}</p>
    </div>
  );
}

export default BoxColor;
