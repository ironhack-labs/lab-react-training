const BoxColor = ({ r, g, b }) => {

    const colorB = {
        backgroundColor: `rgb(${r},${g},${b})`,
        padding: '20px',
        color: 'white',
        margin: '1px solid black'
    }

    // const componentToHex = (c) => {
    //     const hex = c.toString(16);
    //     return hex.length == 1 ? "0" + hex : hex;
    // }

    // const rgbToHex = (r, g, b) => {
    //     return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    // }
    // console.log("------------------------", rgbToHex())

    return (
        <div style={colorB}>{r}{g}{b} <br /> </div>
    )
}

export default BoxColor