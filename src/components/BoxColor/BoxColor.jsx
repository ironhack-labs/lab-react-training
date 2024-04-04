
import './BoxColor.css'

function BoxColor(props) {
const {r, g, b} = props
  return (
    <div style={{ backgroundColor: `rgb(${r},${g},${b})` }} className='boxcolor' >
        <p>rgb({r},{g},{b})</p>


    </div>
  )
}

export default BoxColor