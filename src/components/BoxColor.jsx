function BoxColor(props) {
  const { r, g, b } = props;

  return (
    <div
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: "400px",
        height: "200px",
      }}
    >
      <p>
        rgb({r},{g},{b})
      </p>
    </div>
  );
}

export default BoxColor;
