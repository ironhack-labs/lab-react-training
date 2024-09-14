const BoxColor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
  };

  return (
    <div
      className="w-full h-24 mb-4 flex items-center justify-center"
      style={divStyle}
    >
      rgb({r},{g},{b})
    </div>
  );
};

export default BoxColor;
