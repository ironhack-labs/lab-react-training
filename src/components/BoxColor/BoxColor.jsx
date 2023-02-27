import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    const bgColor = `rgb(${r}, ${g}, ${b})`


    function contrastColor(backgroundColor) {

        let brightness = (r * 299 + g * 587 + b * 114) / 1000;

        return brightness > 128 ? '#000000' : '#FFFFFF';
    }

    const style = {
        backgroundColor: bgColor,
        color: contrastColor(bgColor)
    }

    return (
        <div className="BoxColor" style={style}>
            <p>{bgColor}</p>
        </div>
    )
}

export default BoxColor