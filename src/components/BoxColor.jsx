const BoxColor = (props) => {
    const { r, g, b } = props
    const color = {
        backgroundColor: `rgb(${r},${g},${b})`
    }
    return (
        <div>
            <div style={color}>
                <p>rgb({r},{g},{b})</p>

            </div>
        </div>
    )
}

export default BoxColor