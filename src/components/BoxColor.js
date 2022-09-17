
function BoxColor(props) {
  const { r, g, b } = props;
  return (
    <div
      style={{
        // height: '50vh',
        // width: '100vh',
        backgroundColor: `rgb(${r},${g},${b})`,
      }}
    >
      <h1>
        rgb({r},{g},{b})
      </h1>  
    </div>
  );
}
export default BoxColor;
