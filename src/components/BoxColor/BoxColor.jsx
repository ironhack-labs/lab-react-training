import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {
    let fontColor
    if (r === 255) {
        fontColor = "white"
    } else {
        fontColor = "black"
    }

    const customStyles = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        color: fontColor
    }

    return (
        <div className='BoxColor' style={customStyles}>
            <p>rgb({r},{g},{b})</p>
        </div>

    )
}

export default BoxColor