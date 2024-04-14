import './BoxColor.css';

function BoxColor({ r, g, b }) {
  return (
    <div className="color" style={{backgroundColor: `rgb(${r}, ${g}, ${b}`}}>rgb({r},{g},{b})</div>
  )
}

BoxColor.defaultProps = {
  r: 0,
  g: 0,
  b: 0
}

export default BoxColor;