const BoxColor = (props) => {
    const divStyle = {
        backgroundColor: `rgb (${props.r}, ${props.g}, ${props.b})`
    }
    return (
        <div style={divStyle}>
            <p>{props.r}</p>
            <p>{props.g}</p>
            <p>{props.b}</p>
        </div>
    );
};

export default BoxColor;