const BoxColor = ({ r, g, b }) => {
    const colorBox = {
        backgroundColor: (r, g, b)
    }
    return (
        <div style={colorBox}>color</div>

    )
}

export default BoxColor