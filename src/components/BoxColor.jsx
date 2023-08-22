

const BoxColor = ({ r, g, b }) => {
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  const textColor = r + g + b > 382 ? 'black' : 'white'; 
  const boxStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    padding: '60px',
    margin: '50px',
    border: '1px solid #ccc'
  };

  return (
    <div className="box-color" style={boxStyle}>
      {backgroundColor}
    </div>
  );
};

export default BoxColor;

