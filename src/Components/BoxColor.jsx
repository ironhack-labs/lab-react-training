const BoxColor = ({ r, g, b }) => {
    const backgroundColor = `rgb(${r}, ${g}, ${b})`;
    const textColor = r + g + b > 382 ? 'black' : 'white'; // Choose text color based on background brightness
    const boxStyle = {
      backgroundColor: backgroundColor,
      color: textColor,
      padding: '20px',
      margin: '10px',
      border: '1px solid #ccc'
    };
    return (
      <div className="box-color" style={boxStyle}>
        {backgroundColor}
      </div>
    );
  };
  export default BoxColor;
  
  
  
  
  
  