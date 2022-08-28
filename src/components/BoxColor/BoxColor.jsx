import './BoxColor.css'

function BoxColor({r, g, b}) {

  let colorStyle = {backgroundColor: `rgb(${r}, ${g}, ${b})`}

  function ColorToHex(color) {
    let hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
  }

  function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
  }

  return (
    <div className='container-box-color' style={colorStyle}>
      <h3 className="align-self-center">rgb({r},{g},{b}) </h3>
      <h3 className="align-self-center">{ConvertRGBtoHex(r,g,b)}</h3>
    </div>
  )
}
export default BoxColor