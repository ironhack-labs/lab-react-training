const BoxColor = ({ r, g, b }) => {

    const backgroundColor = `rgb(${r},${g},${b})`

    return (

        <div style={{ backgroundColor }}>
            <p> rgb({r}{g}{b})</p>
        </div>

    )
}

export default BoxColor