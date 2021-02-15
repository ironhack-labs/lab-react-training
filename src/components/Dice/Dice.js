import React from 'react';

function Dice() {
    let randomNumber = Math.floor(Math.random()*6) + 1
    let randomDiceimg = "../img/dice" + randomNumber + ".png"
    let randomImage = "./img/" + randomDiceimg

    
  
    return (
    <div>
      <img style = {{width: 200 , height: 200}} src = {randomImage}/>
    </div>
  );
}

export default Dice;