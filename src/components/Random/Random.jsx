import './Random.css';

const Random = ({ min, max }) => {
  return (
    <div className="border">
      Random value between {min} and {max} =&gt; {''}
      {Math.floor(Math.random() * (max - min) + min)}
    </div>
  );
};

export default Random;
