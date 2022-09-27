const BoxColor = (props) => {
  const { r, g, b } = props;
  return (
    <div
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      className="box-color"
    >
      <h3>
        rgb({r}, {g}, {b}) <br></br>#{r.toString(16)}
        {g.toString(16)}
        {b.toString(16)}
      </h3>
    </div>
  );
};

export default BoxColor;
