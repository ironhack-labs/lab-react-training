const BoxColor = ({ r, g, b }) => {
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;

  const boxStyle = {
    backgroundColor: backgroundColor,
    padding: '10px',
    margin: '10px',
    width: '200px',
    height: '100px',
    border: '1px solid black',
    textAlign: 'center',
  };

  return (
    <div style={boxStyle}>
      <p>
        RGB: ({r}, {g}, {b})
      </p>
    </div>
  );
};

export default BoxColor;
