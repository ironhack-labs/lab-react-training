const BoxColor = props => {
    const { r,g,b} = props
     let color="blue"
   
     const style = {
         backgroundColor: `rgb(${r},${g},${b})`
     }

    const toHex = color => {
        let hex = color.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    const convertToHex = (r, g, b) => {
        return "#" + toHex(r) + toHex(g) + toHex(b);
    }
    return (
        <div style ={style}>
            <p>rgb({r},{g},{b})</p>
            <p>{convertToHex(r, g, b)}</p>
        </div>

    )
}

export default BoxColor;