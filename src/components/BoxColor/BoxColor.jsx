import "./BoxColor.css"

function BoxColor(props) {
  const style = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    color: props.r === 255 && props.g === 0 && props.b === 0 ? "white" : "black"
  };

  return (
    <div style={style} className="container">
      <div className="text-content">
        <p className="text">rgb({props.r}, {props.g}, {props.b})</p>   
      </div>
    </div>
  );
}

export default BoxColor;