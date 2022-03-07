
import './BoxColor.css'

function BoxColor({ r, g, b }) {
  

  return (
    <div class = "card" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <h1>
        rgb {r} {g} {b} 
      </h1>
    </div>
  );
}

export default BoxColor;
