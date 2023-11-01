function BoxColor(props) {
    // Convert RGB to hexadecimal
    const toHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    const divStyle = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        height: '60px',
        width: 'auto',
        border: '1px solid black',
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
    };

    const hexColor = `#${toHex(props.r)}${toHex(props.g)}${toHex(props.b)}`;
    
    return (
        <div style={divStyle}>
            <p>
                rgb({props.r},{props.g},{props.b})<br />
                {hexColor}
            </p>
        </div>
    );
}

export default BoxColor;
