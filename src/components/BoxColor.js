const BoxColor = ({ r, g, b}) => {
    const divStyle = {background: `rgb(${r}, ${g}, ${b})`}
    return (
        <article>
            <div style={divStyle}>{r} {g} {b}</div>
        </article>
    )
}

export default BoxColor