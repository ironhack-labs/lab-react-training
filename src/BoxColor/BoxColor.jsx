import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        color: 'white'
    }


    return (
        <div className='box-color' style={divStyle}>
            RGB ({r}, {b}, {g})
        </div>

    )
}

export default BoxColor