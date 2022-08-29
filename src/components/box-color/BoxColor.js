import './BoxColor..css'

function BoxColor ({r, g, b}) {
  
  const myStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  }

  function RGBtoHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

      if (r.length === 1)
        r = "0" + r;
      if (g.length === 1)
        g = "0" + g;
      if (b.length === 1)
        b = "0" + b;

    return "#" + r + g + b;
  }

  return (
    <div className="d-flex flex-column align-items-center border border-dark my-2" style={myStyle}>
      <p className='m-2' >{myStyle.backgroundColor}</p>
      <p className='m-2'>{RGBtoHex(r, g, b)}</p>
    </div>
  )
}

export default BoxColor