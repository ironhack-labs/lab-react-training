function BoxColor({ r, g, b }) {
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    
    const divStyle = { backgroundColor: rgbColor };

    const luminance = 0.299 * (r / 255) + 0.587 * (g / 255) + 0.114 * (b / 255);
    luminance < 0.5 ? divStyle.color = "white" : divStyle.color = "black";

    return (
        <div className="border-dark border my-3 mx-2 p-5 border-2 fw-bold" style={divStyle}>
            <h5>{rgbColor}</h5>
            <h5>{hexColor}</h5>
        </div>
    )
}

export default BoxColor;