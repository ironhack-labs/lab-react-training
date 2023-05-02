function BoxColor(props) {
  const { r, g, b } = props;

  const color = `rgb(${r}, ${g}, ${b})`;

  return (
    <div
      className="box-color"
      style={{
        backgroundColor: color,
        width: '400px',
        margin: '20px',
        border: '1px solid black',
      }}
    >
      <p>{color}</p>
      <p>
        #{r.toString(16).padStart(2, '0')}
        {g.toString(16).padStart(2, '0')}
        {b.toString(16).padStart(2, '0')}
      </p>
    </div>
  );
}

export default BoxColor;
