function BoxColor({ r, g, b }) {

    const color = `rgb(${r},${g},${b})`

    return (
        <div style={
            {
                color: 'blue',
                backgroundColor: color
            }
        }>
            <p>rgb({r}{g}{b})</p>
        </div>

    )
}

export default BoxColor