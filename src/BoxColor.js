const BoxColor = ({ r, g, b }) => {

    const recStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: 300,
        height: 200
    }

    return (

        <div style={recStyle}>
            <p>rgb({r},{g},{b})</p>
        </div>
    )
}

export default BoxColor