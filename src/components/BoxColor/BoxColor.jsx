import './../BoxColor/BoxColor.css'

function BoxColor({ r, g, b }) {

    const boxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b}`
    }


    return (
        <div className='BoxColor' style={boxStyle}>
            <p>rgb({r},{g},{b})</p>
            <p>#ff0000</p>
        </div>

    )
}

export default BoxColor