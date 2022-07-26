function BoxColor(props) {
  let boxStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    height: '3em'
  }  
  return (
    <div className="border box-color" style={boxStyle}>
      <p>{boxStyle.backgroundColor}</p>
    </div>
  );
}

export default BoxColor;
