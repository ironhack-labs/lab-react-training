import './BoxColor.css'
const BoxColor = ({ r, g, b }) => {
    const color = "(rgb: " + r.toString() + "," + g.toString() + "," + b.toString() + ")"
    return (
        <div className="boxColor" style={{ background: `rgb(${Number(r)},${Number(g)},${Number(b)})` }}>{color}
        </div>
    )
}

export default BoxColor