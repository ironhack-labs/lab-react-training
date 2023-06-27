function BoxColor(props) {
  // console.log(props.r, props.g, props.b);

  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    color: 'white',
  };

  return (
    <div style={divStyle} className="BoxColor">
      <p>
        rgb ({props.r}, {props.g}, {props.b})
      </p>
      <span>#{props.hex}</span>
    </div>
  );
}

export default BoxColor;
