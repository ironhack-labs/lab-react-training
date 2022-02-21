import './BoxColor.css';

function BoxColor({ r, g, b }) {
  return (
    <div
      className="boxColor"
      style={{
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '500px',
        height: '80px',
        padding: '5px',
      }}
    >
      <p>
        rgb({r}, {g}, {b})
      </p>
    </div>
  );
}

export default BoxColor;
