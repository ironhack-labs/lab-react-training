function Random({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <div className="mb-3 border border-1 border-dark m-3">
      <p className="m-2">Random value between {min} and {max}  =  {randomNumber}</p>
    </div>
  )
};


Random.defaultProps = {
  min: '',
  max: '',
};


export default Random