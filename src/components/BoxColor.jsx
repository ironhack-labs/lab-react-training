const BoxColor = ({ r, g, b }) => {
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  return (
    <article className="idCard" style={{ backgroundColor }}>
      <h3>
        rgb({r},{g},{b})
      </h3>
    </article>
  );
};

export default BoxColor;
