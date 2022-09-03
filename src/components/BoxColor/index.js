import './boxcolor.css'


function BoxColor ({ r, g, b }) {

   
    return (
      <div
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      className="boxcolor"
    >
      <h2>
        rgb({r}, {g}, {b})
      </h2>
      <h2>
        {'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}
      </h2>
    </div>
  );
}
  
  export default BoxColor;