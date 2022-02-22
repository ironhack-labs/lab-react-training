import './BoxColor.css'

const pStyle = {
    backgroundColor: `red`,
}

const BoxColor = (props) => {

    const { r, g, b } = props
    return (

        <p style={pStyle} className='rgb'>rgb ({r}, {g}, {b})</p>
    )
}

export default BoxColor