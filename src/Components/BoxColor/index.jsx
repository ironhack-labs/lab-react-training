const BoxColor = ({ r, g, b }) => {
  const background = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
 
  };

  return (
    <div style={background}>
      RGB: {r}, {g}, {b}
    </div>
  );
};

export default BoxColor;