import './BoxColor.css'

const BoxColor = (props) => {
  let { r, g, b } = props;

  const convertRgbToHex = () => {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;

    return "#" + r + g + b;
  }
  return (
    <div id='box-item' style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }} >
      <p>rgb({r},{g},{b})</p>
      <p>{convertRgbToHex()}</p>
    </div >)


}

export default BoxColor