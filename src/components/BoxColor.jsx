function BoxColor(props) {
    const { r, g, b } = props;
  
    // Función para convertir un valor a su representación hexadecimal
    const toHex = (value) => {
      const hex = value.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    };
  
    const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    const divStyle = {
      backgroundColor: `rgb(${r},${g},${b})`,
      padding: '10px',
      border: '2px solid black',
      color: 'black'
    };
  
    return (
      <div className="boxcolor" style={divStyle}>
        <p>
          RGB: {r}, {g}, {b}
        </p>
        <p>
          Hex: {hexColor}
        </p>
      </div>
    );
  }
  
  export default BoxColor;
  