function BoxColor(props){
    const boxStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`
    }

    return(
        <h1 style={boxStyle} id="colorbox">rgb({props.r},{props.g},{props.b})</h1>
    )
}

export default BoxColor;