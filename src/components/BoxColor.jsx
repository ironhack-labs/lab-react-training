const BoxColor = ({ r, g, b }) => {
    const validateColorValue = (value) => Math.min(255, Math.max(0, value));
    const red = validateColorValue(r);
    const green = validateColorValue(g);
    const blue = validateColorValue(b);
    const boxStyle = {
      backgroundColor: `rgb(${red},${green},${blue})`,
      width: '200px',
      height: '100px',
      border: '1px solid #000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    };
  
    return (
      <div style={boxStyle}>
        <p>rgb({red}, {green}, {blue})</p>
      </div>
    );
  };
  
  export default BoxColor;