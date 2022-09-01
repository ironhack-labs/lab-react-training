function Random({min, max}) {
  min = Math.ceil(min);
  max = Math.floor(max); 

  return (
    <div>
    {Math.floor(Math.random() * (max - min +1)) + min}
    </div>
  )
}

export default Random;