import './BoxColor.css'

function BoxColor({r, g, b, text}) {
  
    const boxStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        color: text
    }

    return (
        <div className='BoxColorBox' style={boxStyle}>
            <p>rgb({r},{g},{b})</p>
        </div>
    )
}

export default BoxColor