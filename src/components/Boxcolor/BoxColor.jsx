const BoxColor = (props) => {

    let divStyle = { backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }

    return (
        <div className="boxcolor-card" style={divStyle}>
            <div className="rgb-text">
                <h3>rgb({props.r}{props.g}{props.b})</h3>
            </div>
        </div>
    )
}

export default BoxColor;