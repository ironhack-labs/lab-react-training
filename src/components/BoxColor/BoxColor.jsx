import "./BoxColor.css";

function BoxColor(props) {
    const { r, g, b } = props

    const divStyle = {
        color: 'black',
        backgroundColor: `rgb(${r},${g},${b})`
      };


  return (
    <div className="box-color">
       <div className="box-color-text" style={divStyle}>{ `rgb(${r},${g},${b})` }</div>
    </div>
  );
}

export default BoxColor;