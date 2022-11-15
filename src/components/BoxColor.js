const BoxColor = (props) => {
    function valueToHex(c) {
        var hex = c.toString(16);
        return hex
    }

    function rgbToHex() {
        return(valueToHex(props.r) + valueToHex(props.g) + valueToHex(props.b));
    }

    const divStyle = {
        backgroundColor: 'rgb(' + props.r + ',' + props.g + ',' + props.b + ')',
    };

    return(
        <div className="boxColorText" style={divStyle}>
            <div>
                rgb({props.r},{props.g},{props.b})
                <br/>
                #{rgbToHex()}
            </div>
        </div>
    )
}

export default BoxColor
