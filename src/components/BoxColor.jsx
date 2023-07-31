const BoxColor = (props) => {
  const { r, g, b } = props
  const rHex = String('0' + r.toString(16)).slice(-2)
  const gHex = String('0' + g.toString(16) ).slice(-2)
  const bHex = String('0' + b.toString(16)).slice(-2)

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