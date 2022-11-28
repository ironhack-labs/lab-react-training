const BoxColor = props => {

    const { r, g, b } = props

    const boxStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        padding: '30px',
        marginBottom: '10px'
    }

    return (
        <section className="BoxColor" style={boxStyle}>
            <span>{r}-{g}-{b}</span>
        </section>
    )
}

export default BoxColor