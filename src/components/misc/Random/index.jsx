import './index.css';

function Random({ min, max }) {
  return (
    <div className="Random">
      <div>
        <p>Random value between {min} and {max}</p>
      </div>
    </div>
  );
}

export default Random;
