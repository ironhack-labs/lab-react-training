function rgbToHex(rgb) {
  let result = "#";
  for (const color of rgb){
    let hex = color.toString(16);
    result += hex.length == 1 ? "0" + hex : hex;
  }
  return (result);
}

function BoxColor(props) {
  const red = props.r;
  const green = props.g;
  const blue = props.b;
  const fontColor = (red*0.299 + green*0.587 + blue*0.114) > 186 ? "black" : "white";
  const style = {
    padding: "20px",
    textAlign: "center",
    color: fontColor,
    backgroundColor: `rgb(${red}, ${green}, ${blue})`
  };
  return (
    <div className="box" style={style}>
      rgb({red},{green},{blue})
      <br />
      {rgbToHex([red, green, blue])}
    </div>
  );
}

export default BoxColor;
