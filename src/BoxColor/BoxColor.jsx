import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {
    let rgb = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        color: 'white'
    }
    return (
        <div className='rgb' style={rgb}>
            <h1>rgb {r}, {g}, {b}</h1>
        </div>
    )
}

export default BoxColor