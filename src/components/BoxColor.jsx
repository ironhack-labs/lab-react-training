function BoxColor(props) {
    function rgbToHex(r, g, b) {
        let result = '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length == 1 ? '0' + hex : hex;
        }).join('')
        return result;
    }

    const boxColorStyle = {
        border: '1px solid black',
        margin: '1rem',
        padding: '4rem',
        textAlign: 'left',
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
        color: 'white',
        textAlign: 'center',
        fontSize: 'x-large',
    }

    return (
        <div style={boxColorStyle}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{rgbToHex(props.r, props.g, props.b)}</p>
        </div>
    );
}

export default BoxColor;