function BoxColor({ r, g, b }) {
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return (
    <div style={{ backgroundColor: `${rgb}`, margin: '40px 350px' }}>{rgb}</div>
  );
}

export default BoxColor;
