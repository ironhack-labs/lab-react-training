const BoxColor = ({ r, g, b }) => {

    const divStyle = {
        color: 'white',
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',

    }
    return (
        <div style={divStyle} >
            rgb {r},{g},{b}
        </div>
    )
}

export default BoxColor