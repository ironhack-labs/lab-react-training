import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {


    const boxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    
    return (
        <div className="box-card" style={boxStyle}>
            <p className='colorParagraph'>rgb ({r}, {g}, {b})</p>
        </div>
    )
}

export default BoxColor