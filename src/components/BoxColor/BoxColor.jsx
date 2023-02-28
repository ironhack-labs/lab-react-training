import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {
    const color = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    return <div className="colorBg" style={color}>{r} {g} {b}</div>
}

export default BoxColor