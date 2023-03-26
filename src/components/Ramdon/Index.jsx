import './Index.css';

  function Ramdon({ min, max }) {
  const result = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="Random">
      <p>
        Random value between {min} and {max} = {result}
      </p>
    </div>
  );
}

export default Ramdon;
