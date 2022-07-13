import React, { useState } from 'react';
import DieE from "../assets/images/dice-empty.png"
import Die1 from "../assets/images/dice1.png"
import Die2 from "../assets/images/dice2.png"
import Die3 from "../assets/images/dice3.png"
import Die4 from "../assets/images/dice4.png"
import Die5 from "../assets/images/dice5.png"
import Die6 from "../assets/images/dice6.png"

function Dice(){
    let die = [DieE, Die1, Die2, Die3, Die4, Die5, Die6]
    const [dice, setDice] = useState(DieE);
   
    return (
     <div >
        <img src={dice} onClick={(event)=> setDice((prevDie) => die[Math.floor(Math.random()*7)])}/>
    </div>
  )
}

export default Dice