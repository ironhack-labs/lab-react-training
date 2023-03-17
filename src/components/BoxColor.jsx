function BoxColor({ r, g, b }) {
  const divStyle = {
    background: `rgb(${r}, ${g}, ${b}`
  }
  return (
    <section className="mb-3 border border-1 border-dark m-3 p-3" style={divStyle}>
      <p className="text-center fs-3">rgb({r}, {g}, {b})</p>
    </section>
  )

}

BoxColor.defaultProps = {
  r: 0,
  g: 0,
  b: 0,
}
export default BoxColor