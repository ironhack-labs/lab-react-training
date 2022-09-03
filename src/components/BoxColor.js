function BoxColor(props) {
  let divStyle = {
    backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
  };
  return (
    <div classename="Boxcolor" style={divStyle}>
      rgb( {props.r},{props.g},{props.b} )
    </div>
  );
}

export default BoxColor;
