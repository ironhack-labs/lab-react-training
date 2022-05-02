import "../styles/BoxColor.css"

const BoxColor = ({ r, g, b }) => {
    let backgroundColor = `rgb(${r},${g},${b})`
    return (
        <div className="boxColor" style={{ backgroundColor}}>
            <span>rgb({r},{g},{b})</span>
        </div>
    )
}
export default BoxColor