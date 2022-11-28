import './BoxColor.css'

const BoxColor = props => {

  const { r, g, b } = props

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }



  return (
    <div className='BoxColor' style={{
      backgroundColor: `${rgbToHex(r, g, b)}`
    }} >
      <p>rgb({r},{g},{b})</p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  )
}

export default BoxColor