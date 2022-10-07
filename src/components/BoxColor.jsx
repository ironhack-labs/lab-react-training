export default function BoxColor(props) {
  const divStyle = {
    width: '200px',
    height: '100px',
    backgroundColor: `rgb(${props.red},${props.blue},${props.green} )`
  }
  return (
    <div className="boxcolor" style={divStyle}>
      <div>rgb({props.red},{props.green},{props.blue}</div>
    </div>
  )
}