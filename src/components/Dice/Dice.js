import React, { useState } from "react";


const diceImg = {
  0: "/img/dice-empty.png",
  1: "/img/dice1.png",
  2: "/img/dice2.png",
  3: "/img/dice3.png",
  4: "/img/dice4.png",
  5: "/img/dice5.png",
  6: "/img/dice6.png"
}

let length = Object.keys(diceImg).length;
console.log(length)
const random = Math.floor(Math.random() * length-1) + 1
console.log(random)

function Dice(){
  const [state, setState] = useState(diceImg[random])
  console.log("state",state)

  const handleImg = () => {
    setState(diceImg[0]);
    setTimeout(
      function() {
        let length = Object.keys(diceImg).length;
        const randomAfter = Math.floor(Math.random() * length-1 ) + 1
        setState(diceImg[randomAfter]);
      },
      1000
  );
  }
  return(
    <img onClick={handleImg} src={state} alt="dice" style={{width:"100px", height:"auto"}}></img>
  )
}

export default Dice