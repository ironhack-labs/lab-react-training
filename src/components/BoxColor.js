const BoxColor = ({ r, g, b }) => {

    let styleColor = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`
    }
    return (

        <div style={styleColor}>
            rgb({r},{g},{b})

        </div>

    )
}

export default BoxColor