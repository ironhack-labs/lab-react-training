const BoxColor = props => {
    const { r, g, b } = props
    const backcolor = { background: `rgb(${r}, ${g}, ${b})` }

    return (
        <div style={backcolor}>
            <p>{r} {g} {b}</p>
        </div>
    )
}

export default BoxColor