
function BoxColor(props) {
  return (
    <div style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>

        <p>rgb({props.r},{props.g},{props.b})</p>

    </div>
  )
}

export default BoxColor;