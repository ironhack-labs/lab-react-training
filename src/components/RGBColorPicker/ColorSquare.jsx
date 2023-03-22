const ColorSquare = ({ squareColor }) => {
  return (
    <div
      className="ColorSquare"
      style={{
        backgroundColor: squareColor,
        border: '2px solid black',
        width: '50px',
        height: '50px',
      }}
    ></div>
  );
};

export default ColorSquare;
