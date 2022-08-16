function BoxColor(props) {
const {r, g, b} = props


return (
    <div>
        <p style={{backgroundColor: `rgb(${r},${g},${b})`}} class="rgb-box">rgb({r},{g},{b})</p>
    </div>
  )
}

export default BoxColor