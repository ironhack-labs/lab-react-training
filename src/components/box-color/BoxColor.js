import "./BoxColor.css"

function BoxColor({ r, g ,b}) {
  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  }
 
  function rgbToHex({r}, {g}, {b}) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  return(
    <div className="container">
      <div className="box-color d-flex flex-column justify-content-center" style={boxStyle}>
        <h3 className="align-self-center">rgb({r},{g},{b}) </h3>
        <h3 className="align-self-center">{rgbToHex({r},{g},{b})}</h3>
      </div>
    </div>
  )
}

BoxColor.defaultProps = {
  r: Math.floor(Math.random() * (255 - 0) + 0),
  g: Math.floor(Math.random() * (255 - 0) + 0),
  b: Math.floor(Math.random() * (255 - 0) + 0)
}

export default BoxColor