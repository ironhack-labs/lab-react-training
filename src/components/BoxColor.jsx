function BoxColor({ r, g, b }) {
  const color = `rgb(${r}, ${g}, ${b} )`;

  return (
    <div>
      <div style={{ height: "1rem", backgroundColor: color }}></div>
    </div>
  );
}

export default BoxColor;
