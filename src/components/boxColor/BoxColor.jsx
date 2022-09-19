function BoxColor({ r, g, b }) {

    let divStyle = { backgroundColor: `rgb(${r}, ${g}, ${b})` }

    return (

        <div className="box" style={divStyle}>
            <p>rgb({r},{g},{b})</p>
        </div >

    )
}

export default BoxColor;