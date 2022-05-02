import "./BoxColor.css"

const BoxColor = ({ r, g, b }) => {
    let backgroundColor = `rgb(${r}, ${g}, ${b})`;

    return (
        <div className="rgb" style={{ backgroundColor }}>
            <p>rgb({r}, {g}, {b})</p>
        </div>
    )
}

export default BoxColor