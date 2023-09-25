function BoxColorComponent({ r, g, b }) {
    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    const boxStyle = {
        width: '200px',
        height: '100px',
        backgroundColor: rgbColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
    };

    return (
        <div style={boxStyle}>
            <p>{rgbColor}</p>
        </div>
    );
}

export default BoxColorComponent;