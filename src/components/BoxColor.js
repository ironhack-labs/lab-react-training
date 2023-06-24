function BoxColor({ r, g, b }) {
    const boxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: 'auto',
        height: '100px',
        margin: '10px',
        border: '1px solid black',
      };

  return (
    <div style={boxStyle}>
    <p>RGB: {r}, {g}, {b}</p>
    <p>{boxStyle.backgroundColor}</p>
  </div>
  )
}

export default BoxColor