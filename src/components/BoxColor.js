function BoxColor({ r, g, b }) {
  const divStyle = {
    background: `rgb(${r}, ${g}, ${b}`
  }
  return (
      <div className="m-2 p-2 border border-dark colores" style={divStyle}>
      <p className="text-center fs-3">rgb({r}, {g}, {b})</p>
      </div>
  )

}

BoxColor.defaultProps = {
  r: 0,
  g: 0,
  b: 0,
}

export default BoxColor