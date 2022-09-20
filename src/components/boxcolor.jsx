import './boxcolor.css'

function BoxColor({r,g,b}){
    const color = `rgb(${r},${g},${b})`
    
    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    return (
    <div
    style= {{backgroundColor : color}}
    className= "boxColor">
        rgb({r},{g},{b})
        <p>{rgbToHex(r,g,b)}</p>
    </div>
)

}

export default BoxColor