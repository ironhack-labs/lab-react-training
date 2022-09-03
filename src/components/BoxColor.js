import './BoxColor.css';
const BoxColor = ({ r, g, b }) => {
  let textColor = '';
  if (r === 255 && g === 0 && b === 0) {
    textColor = 'white';
  } else {
    textColor = 'black';
  }

  return (
    <div>
      <div
        className="card card-boxColor"
        style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      >
        <span style={{ color: `${textColor}` }}>
          rgb({r},{g},{b})
        </span>
      </div>
    </div>
  );
};

export default BoxColor;
