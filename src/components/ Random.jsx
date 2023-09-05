function Random({min, max}){
  const randomValue = randomNumberInRange(min, max);
  return (
    <div className="box">
      Random value between {min} and {max} {`=>`} {randomValue}
    </div>
  )
}


const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() 
          * (max - min + 1)) + min;
};

export default Random