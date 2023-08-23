import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {

    const boxColor = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    return (

        <h2 className='BoxColor' style={boxColor}>rgb({r}, {g}, {b})</h2>
    )
}

export default BoxColor