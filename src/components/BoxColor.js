import './BoxColor.css';

function BoxColor(props) {
  const rgbColor = `rgb(${props.r},${props.g},${props.b})`;

  const divStyle = {
    backgroundColor: rgbColor,
  };

  return (
    <div className="box-color" style={divStyle}>
      <p>{rgbColor}</p>
      {/* <p></p> */}
    </div>
  );
}

export default BoxColor;
