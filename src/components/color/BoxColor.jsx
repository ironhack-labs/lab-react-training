function boxColor({ r, g, b }) {
    const style = `rgb(${r},${g},${b}`
    console.log(style)
    return (
        <div style={{ backgroundColor: style }}>Hello World!</div>
    )
}

export default boxColor