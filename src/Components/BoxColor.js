
import "./BoxColor.css"

function BoxColor({ r, g, b }) {

    const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        width: "200px",
        height: "50px"
    }

    function RGBToHex(r, g, b) {

        let r1 = r.toString(16);
        let g1 = g.toString(16);
        let b1 = b.toString(16);

        if (r1.length === 1)
            r1 = "0" + r;
        if (g1.length === 1)
            g1 = "0" + g;
        if (b1.length === 1)
            b1 = "0" + b;

        let hexCode = "#" + r1 + g1 + b1

        return hexCode;
    }

    return (

        <div className="box" style={divStyle}> rgb({r},{g},{b})
            <br />
            {RGBToHex(r, g, b)}
        </div >

    )
}




export default BoxColor