function BoxColor ({r, g, b}) {
    const divStyle = {backgroundColor: `rgb(${r},${g},${b})`};

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
      
    return (
        <div className="box boxColor" style={divStyle}>
            <div className="text-boxColor">
                <p>rgb{r},{g},{b}</p>
                <p>{rgbToHex(r, g, b)}</p>
            </div>
        </div>
    )
}

export default BoxColor