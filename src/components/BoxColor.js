const BoxColor = ({ r, g, b }) => {

    const rgbToHex = (rgb) => {

        let hex = Number(rgb).toString(16);
        if (hex.length < 2) hex = '0' + hex
        return hex;
        
    }

    const fullColorHex = (r, g, b) => {

      let red = rgbToHex(r);
      let green = rgbToHex(g);
      let blue = rgbToHex(b);
      return "#" + red + green + blue;

    };

    return (
        <div className="BoxColor border my-2 p-3" style={{ 'max-width': '800px', margin: '0 auto', 'background-color': `${fullColorHex(r, g, b)}` }}>

            <h3 className="fw-light">rgb({r},{g},{b})</h3>
            <h3 className="fw-light">{fullColorHex(r, g, b)}</h3>
            
        </div>
    );
}

export default BoxColor