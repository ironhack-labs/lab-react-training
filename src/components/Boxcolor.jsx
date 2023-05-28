

function Boxcolor(colors) {
  const color =`rgb(${colors.r},${colors.g},${colors.b})`;
  return (
    <div>
      <div className="langdiv" style={{
        backgroundColor: color
      }}>Hello World!</div>;
    </div>
  )
}

export default Boxcolor
