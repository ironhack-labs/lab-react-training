import './BoxColor.css'
const BoxColor = ({ r, g, b }) => {
    const color = `rgb(${r},${g},${b})`
    return (
        <div className="color" style={{ backgroundColor: color }}
        >

            <h1>Color {r}-{g}-{b}</h1>
        </div >
    )
}
export default BoxColor