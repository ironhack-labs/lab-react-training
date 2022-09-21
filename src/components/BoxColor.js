function BoxColor({ r, g, b }) {
  return (
    <p
      className="boxColor"
      style={{
        border: '1px solid',
        margin: 30,
        padding: 10,
        backgroundColor: `rgb(${r}, ${g}, ${b}`,
      }}
    >
      rgb({r}, {g}, {b})
    </p>
  );
}

export default BoxColor;
