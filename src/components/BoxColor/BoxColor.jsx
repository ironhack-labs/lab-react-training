const BoxColor = ({ r, g, b }) => {
    let color = `rgb(${r}, ${g}, ${b})`
    return (
        <div style={{ backgroundColor: color, width: "200px", height: "100px", marginTop: "5px" }}>BoxColor</div>
    )
}

export default BoxColor