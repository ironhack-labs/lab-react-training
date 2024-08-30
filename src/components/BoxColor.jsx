
function BoxColor ({r,g,b}) {
    const rgbToHexValue = (r, g, b) => {
        const toHex = (value) => value.toString(16).padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
      };
    
      const hexColor = rgbToHexValue(r, g, b);

    return (
    <div style= {{backgroundColor: hexColor}}>
        <p> {hexColor}</p>
    </div>
    )
}

export default BoxColor;