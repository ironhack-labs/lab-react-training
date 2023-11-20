const BoxColor = ({ r, g, b }) => {

    const divStyle = {
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
    };

    return (
        <div className="BoxColor box" style={divStyle}>rbg({r},{g},{b})</div>
    )

}

export default BoxColor