function BoxColor({ r, g, b }) {
  return (
    <div
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
        height: '50px',
        width: '%100h',
      }}
    ></div>
  );
}

export default BoxColor;
