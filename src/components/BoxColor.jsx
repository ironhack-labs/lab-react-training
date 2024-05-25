const BoxColor = ({ r, g, b }) => {
  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  const boxStyle = {
    backgroundColor: rgbColor,
    width: '200px',
    height: '100px',
    border: '1px solid black',
    display: 'flex',
    color: 'white',
    margin: '10px' 
   
   
  };

  return (
    <div style={boxStyle}>
      {rgbColor}
    </div>
  );
};




export default BoxColor;