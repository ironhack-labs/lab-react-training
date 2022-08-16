
function BoxColor(props) {
    const {r, g, b} = props;
    console.log(r);
  return (
    <div style={{ background: `rgb(${r}, ${g}, ${b})` }}>
    <p>rgb({r}, {g}, {b})</p>
    </div>
  )
}

export default BoxColor