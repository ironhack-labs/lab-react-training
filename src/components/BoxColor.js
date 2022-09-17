function BoxColor({ r, g, b, hex }) {
  return (
    <article style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <div>
        rgb({r},{g},{b})
      </div>
      <div>{hex}</div>
    </article>
  );
}

export default BoxColor;
