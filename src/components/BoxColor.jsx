function BoxColor({ r, g, b }) {
    const color = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    return (
        <div className="boxColor">
            <div style={color}>
                rgb({r}, {g}, {b})
            </div>
        </div>
    )
}


export default BoxColor