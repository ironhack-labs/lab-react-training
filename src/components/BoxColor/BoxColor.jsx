import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    const rgbColor = `rgb(${r}, ${g}, ${b})`

    const hexRed = r.toString(16).padStart(2, '0');
    const hexGreen = g.toString(16).padStart(2, '0');
    const hexBlue = b.toString(16).padStart(2, '0');

    const hexColor = `#${hexRed}${hexGreen}${hexBlue}`;





    return (

        <div className="box" style={{ backgroundColor: rgbColor }}>
            <p> {rgbColor} </p>
            <p> {hexColor} </p>
        </div>

    )
}


export default BoxColor