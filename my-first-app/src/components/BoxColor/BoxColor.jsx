import './BoxColor.css'
const BoxColor = ({ r, g, b }) => {
    const color = `rgb(${r},${g},${b})`
    return (
        <div style={{ backgroundColor: color }} className='boxConfiguration'>
            <p>rgb({r}, {g}, {b})</p>
        </div>
    )
}

export default BoxColor