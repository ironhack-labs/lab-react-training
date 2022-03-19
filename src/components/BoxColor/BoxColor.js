import './BoxColor.css'

const BoxColor = (props) => {
    const rgbToHex = (r, g, b) => {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
      
        if (r.length === 1) r = "0" + r;
        if (g.length === 1) g = "0" + g;
        if (b.length === 1) b = "0" + b;
      
        return "#" + r + g + b;
    }

    return (
        <div className="box-color container" style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>{rgbToHex(props.r, props.g, props.b)}</p>
        </div>
    )
}

export default BoxColor;