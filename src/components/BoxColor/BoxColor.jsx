import './BoxColor.css'


const BoxColor = ({ r, g, b }) => {

    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
    };

    return (
        <div className='BoxColor' style={divStyle}></div >
    )
}

export default BoxColor