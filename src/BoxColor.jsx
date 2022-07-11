import './BoxColor.css'

function BoxColor({ r, g, b }) {

    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
    }

    let hexRed = r.toString(16)
    let hexGreen = g.toString(16)
    let hexBlue = b.toString(16)

    if (r === 0) hexRed = '00'
    if (g === 0) hexGreen = '00'
    if (b === 0) hexBlue = '00'

    let coloring = ""

    if (r === 255 && g === 0) coloring = 'white'

    const pStyle = {
        color: `${coloring}`
    }


    return (
        <div className='BoxColor' style={divStyle}>
            <p style={pStyle}>rgb({r}, {g}, {b})</p>
            <p style={pStyle}>#{hexRed + hexGreen + hexBlue}</p>
        </div>
    )
}

export default BoxColor