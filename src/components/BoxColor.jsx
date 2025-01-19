function BoxColor(props) {
    const { r, g, b, hue } = props;
  
    // Inline style to set the background color based on RGB values
    const boxStyle = {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      width: '300px',
      height: '100px',
      borderRadius: '8px',
      textAlign: 'center',
      lineHeight: '100px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '18px',
    };
  
    return (
      <div style={boxStyle}>
        {`rgb(${r}, ${g}, ${b})`}
        {hue && <p>{`Hue: ${hue}`}</p>} {/* Bonus feature: Display the hue if provided */}
      </div>
    );
  }
  
  export default BoxColor