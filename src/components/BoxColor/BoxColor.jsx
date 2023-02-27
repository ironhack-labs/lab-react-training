import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {
    const backgroundColor = `rgb(${r}, ${g}, ${b})`
    const style = { backgroundColor }

    return (
        <div className='BoxColor' style={style}>
            <p>{backgroundColor}</p>
        </div>
    )
}

export default BoxColor