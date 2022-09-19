function BoxColor(props) {
    // console.log("eeeeeeeeeeeeeeeee", props)
    const divStyle = {
        height: 100,
        width: 100,
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,

    }

    return <div style={divStyle}></div>;
}
export default BoxColor;





