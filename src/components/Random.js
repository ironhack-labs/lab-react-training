function Random({ min, max }) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  return (
      <p className="border border border-dark m-2 p-2 text-start">Random value between {min} and {max} = {randomNumber}</p>
  )
};

Random.defaultProps = {
  min: "1",  // Assigned randmonly just to play with default props
  max: "100" // Assigned randmonly just to play with default props
};

export default Random;