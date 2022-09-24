import './Random.css';

const Random = ({ min, max }) => { 
  const getRandomNum = () => {
    return Math.round(Math.random() * (max - min) + min);
  };

  return (
    <div className="Random-container">
      <p>
        Random value between {min} and {max} {'=>'} {getRandomNum()}
      </p>
    </div>
  );
};

export default Random;
