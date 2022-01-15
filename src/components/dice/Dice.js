import React from "react";
import './Dice.css';

const Dice = () => {
  
  const [ random, setRandom ] = React.useState(3);
  const src = `/assets/images/dice${random}.png`;
  //console.log(src)

  const getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1; // 1 to 6
  }

  const handleClickDice = () => {
    const getRandom = getRandomValue();
    setRandom(`-empty`)
    //console.log(src);

    setTimeout(()=> {
      setRandom(getRandom)
    }, 1000)
  }

  return (
    <>
      <h1>Dice</h1>
      <img 
        className="dice" 
        src={src}
        alt="Dice"
        onClick={handleClickDice}  
      />
        
    </>
  )
}

export default Dice;