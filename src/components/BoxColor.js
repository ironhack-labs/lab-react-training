import './BoxColor.css';

const BoxColor = ({ r, g, b }) => {
  const backgroundColor = `rgb(${r}, ${g}, ${b}`;

  return (
    <div className="boxcolor">
      <div className="background" style={{ backgroundColor }}>
        <h2>
          rgb({r},{g},{b})
        </h2>
      </div>
    </div>
  );
};

export default BoxColor;
