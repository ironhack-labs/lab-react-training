import './BoxColor.css'

const BoxColor = ({ r, g, b }) => {
    const color = (`rgb(${r}, ${g}, ${b})`)
    return (
        <div className="boxColor">
            <div style={{ backgroundColor: color }} className="boxColorInfo">
                <p>{color}</p>
            </div>
        </div>
    )
}
export default BoxColor