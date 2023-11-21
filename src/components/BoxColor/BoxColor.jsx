function BoxColor({ r, g, b }) {
    const color = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    return (
        <div style={ color }>
            rgb({ r }, { g }, { b })
        </div>
    )
}

export default BoxColor