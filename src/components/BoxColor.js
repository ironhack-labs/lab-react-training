const BoxColor = (props) => {
    const { r, g, b } = props

    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }

    return (
        <div className="BoxColor" style={divStyle}>
            <p>RGB: {r}, {g}, {b}</p>
        </div>
    )
}

export default BoxColor