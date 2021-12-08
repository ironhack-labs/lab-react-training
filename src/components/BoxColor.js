const BoxColor = ({r, g, b}) => {
    const divStyle= {
        background: `rgb(${r},${g},${b})`
    }
    return (
        <div className="BoxColor box" style={divStyle}>
            <h1>rgb({r},{g},{b})</h1>
        </div>
    )
}

export default BoxColor
