function Random({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  return (
      <div className="saludo">
        <p>Random value between {min} and {max}  =  {randomNumber}</p>
      </div>
  )
};

Random.defaultProps = {
  min: '',
  max: '',
};


export default Random