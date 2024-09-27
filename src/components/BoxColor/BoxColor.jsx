import './BoxColor.css'
const BoxColor = ({ r, g, b }) => {
    return (
        <div className="boxcolor">
            <div style={{ backgroundColor: (`rgb(${r},${g},${b})`) }}>rgb({r},{g},{b})</div>
        </div>
    )
}
export default BoxColor