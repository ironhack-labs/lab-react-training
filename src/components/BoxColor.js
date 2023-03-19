function BoxColor({ r, g, b }) {
  const boxStyle = { background: `rgb(${r}, ${g}, ${b})` }
  return (
    <div className="container-fluid m-2 p-4 border border-dark w-100" style={boxStyle}>
      <p className="text-center">rgb({r}, {g}, {b})</p>
    </div>
  )
};

BoxColor.defaultProps = {
  r: 0,
  g: 0,
  b: 0
};

export default BoxColor;