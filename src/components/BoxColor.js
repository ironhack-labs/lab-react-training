function BoxColor({ r, g, b, hex }) {
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  return (
    <div className="boxColor" style={{ backgroundColor }}>
      <p>
        rgb({r}, {g}, {b})
      </p>
      <p>{hex}</p>
    </div>
  );
}

export default BoxColor;
