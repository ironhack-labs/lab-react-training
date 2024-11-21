function BoxColor({ r, g, b }) {
  const style = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    border: "2px solid black",
    padding: "20px",
    textAlign: "center",
  };

  function rgbToHex(r, g, b) {
    const toHex = (c) => ("0" + c.toString(16)).slice(-2);
    return `#${toHex(r)}${toHex(g)}${toHex(b)} `;
  }

  return (
    <div className="box-color">
      <p style={style}>
        rgb({r}, {g}, {b}) <br />
        {rgbToHex(r, g, b)}
      </p>
    </div>
  );
}

export default BoxColor;
