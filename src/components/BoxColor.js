function BoxColor(props) {
    const boxStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        width: '200px',
        height: '200px'

    }


    return(
        <div style={boxStyle}>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
        </div>
    );
};


export default BoxColor;
