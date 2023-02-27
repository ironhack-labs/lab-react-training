import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {


    const boxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    const hex = (r, g, b) => "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);

    return (
        <div className="box-card" style={boxStyle}>
            <p className='colorParagraph'>rgb ({r}, {g}, {b})</p>
            <p className='colorParagraph'>{hex(r, g, b)}</p>
        </div>
    )
}

export default BoxColor