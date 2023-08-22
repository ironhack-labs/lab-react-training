function BoxColor(props){
    const color = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    };
    const hexColor = `#${((1 << 24) + (props.r << 16) + (props.g << 8) + props.b).toString(16).slice(1)}`;
    return(
        <div className="color-box" style={color}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{hexColor}</p>
        </div>
    )
}

export default BoxColor