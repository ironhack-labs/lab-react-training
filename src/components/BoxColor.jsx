function BoxColor({ r, g, b }) {
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return (
    <div
      style={{ backgroundColor: `${rgb}`, margin: '10px 50px', width: '250px' }}
    >
      {rgb}
    </div>
  );
}

export default BoxColor;
