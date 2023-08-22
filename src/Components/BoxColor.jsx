import "../components.css";

function BoxColor(props) {
  const { r, g, b } = props;

  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    with: "100px",
    height: "100px",
    border: "4px solid",
  };

  return (
    <div style={divStyle} className="boxColor">
      rgb({r}, {g}, {b});
    </div>
  );
}

export default BoxColor;
