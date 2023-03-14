//<BoxColor r={255} g={0} b={0} />
//BoxColor r={128} g={255} b={0} />

function BoxColor({ r, g, b }) {
  return (
    <div
      style={{
        height: '100px',
        width: '30px',
        backgroundColor: `rgb(${r},${g},${b})`,
      }}
    ></div>
  );
}

export default BoxColor;
