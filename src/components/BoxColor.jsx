const BoxColor = ({ r, g, b }) => {

    const divStyle = {
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')',
    };

    return (
        <div style={divStyle}>rbg({r},{g},{b})</div>
    )

}

export default BoxColor