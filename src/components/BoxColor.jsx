const BoxColor = (props) => {
  const { r, g, b } = props
  const rHex = r.toString(16)
  const gHex = g.toString(16)
  const bHex = b.toString(16)

  const backgroundStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  }

  return (
    <div className="BoxColor" style={backgroundStyle}>
      <p>rgb({r},{g},{b})</p>
      <p>#{rHex}{gHex}{bHex}</p>
    </div>
  )
}

export default BoxColor