
import './BoxColor.css'

function BoxColor({ r, g, b }) {

  const rConvert = r.toString(16).length === 1 ? '0' + r.toString(16) : r.toString(16);
  const gConvert = g.toString(16).length === 1 ? '0' + g.toString(16) : g.toString(16);
  const bConvert = b.toString(16).length === 1 ? '0' + b.toString(16) : b.toString(16);

  return (
    <div className="card-color" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <p className='text'>
        rgb ({r},{g},{b})
        <br/>
        #{rConvert}{gConvert}{bConvert}
      </p>
    </div>
  );
}

export default BoxColor;
