const Boxcolor = (props) => {
  const { r, g, b } = props;

  const divStyle = {
    background: `rgb(${r},${g},${b})`,
  };
  

  return (
    <div
      className="card-container"
      style={divStyle}
    >
      rgb({r},{g},{b})
    </div>
  );
};

export default Boxcolor;


