import './Index.css'

function BoxColor ({r, g, b}) {
  
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: '600px',
    height: '100px',
    border: '1px solid black',
  };

  return (
    <div className ="BoxColor" style={divStyle}>
      <p>rgb({r}, {g}, {b})</p>
    </div>
  );
}

export default BoxColor;