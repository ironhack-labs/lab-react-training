function BoxColor({ r, g, b }) {

    const style = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '200px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        color: 'white'
    };

    return (
        <div style={style}>
            <p>rgb({r}, {g}, {b})</p>
        </div>
    )
}

export default BoxColor;