function BoxColor({ r, g, b, textColor }) {
  const hexRed = '#ff0000';
  const hexGreen = '#80ff00';

  return (
    <div
      className="box-color"
      style={{
        background: `rgb(${r}, ${g}, ${b})`,
        color: `${textColor}`,
      }}
    >
      <p className="box-text">
        rgb({r}, {g}, {b})
      </p>
      <p className="box-text">{r === 255 ? hexRed : hexGreen}</p>
    </div>
  );
}
export default BoxColor;
