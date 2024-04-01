import './BoxColor.css';

function BoxColor({ r, g, b }) {

  // Calculamos el brillo del color de fondo usando la fórmula de luminancia Y = 0.2126R + 0.7152G + 0.0722B
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Determinamos si el color de fondo es lo suficientemente oscuro como para usar texto blanco
  const textColor = brightness > 128 ? "black" : "white";

  // Convertimos los valores RGB a su representación hexadecimal
  const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

  return (
    <div className="boxcolor-div" style={{backgroundColor: `rgb(${r}, ${g}, ${b})`, color: `${textColor}`}}>
      <p className="boxcolor-p">{`rgb(${ r },${ g },${ b })`} {hex}</p>
    </div>
  );
}

export default BoxColor;
