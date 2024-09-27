function Boxcolor(colors) {
  const color =`rgb(${colors.r},${colors.g},${colors.b})`;
  return (
    <>
      <div className="langdiv" style={{backgroundColor: color}}>
        Hello World!
        </div>
    </>
  )
}

export default Boxcolor
