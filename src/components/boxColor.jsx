const BoxColor = (props) => {
    const { r, g, b } = props
    const color = { backgroundColor: `rgb(${r},${g},${b})` }

    return (
        <div className="boxColorText" style={color}>

            <p>rgb({r},{g},{b})</p>

        </div>
    )
}

export default BoxColor