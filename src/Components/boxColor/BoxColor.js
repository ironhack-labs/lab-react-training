import './BoxColor.css'


const BoxColor = (props) => {

    const { r, g, b } = props
    const pStyle = {
        backgroundColor: `rgb(${r} ${g} ${b})`
    }
    return (

        <p style={pStyle} className='rgb'>rgb ({r}, {g}, {b})</p>
    )
}

export default BoxColor