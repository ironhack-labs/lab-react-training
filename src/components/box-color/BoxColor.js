import './BoxColor.css'



function BoxColor({ r, g, b, className}) {

  const changeToHex = (r, g, b) => '#' + (r.toString(16).length === 1 ? '0' + r.toString(16) : r.toString(16)) + (g.toString(16).length === 1 ? '0' + g.toString(16) : g.toString(16)) + (b.toString(16).length === 1 ? '0' + b.toString(16) : b.toString(16))

  return (
    <div className="box-color">
      <div className="container">
        <div className={`message d-flex flex-column ${g > 0 ? 'text-black' : 'text-white'} ${className}`} style={{
          backgroundColor: changeToHex(r, g, b)
        }}>
          <span>{`rgb(${r},${g},${b})`}</span>
          <span>{changeToHex(r, g, b)}</span>
        </div>
      </div>
    </div>
  );
}

BoxColor.defaultProps = {
  className: ''
}

export default BoxColor;