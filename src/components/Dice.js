import React, { useEffect, useState } from 'react';

import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from  '../assets/images/dice1.png';
import dice2 from  '../assets/images/dice2.png';
import dice3 from  '../assets/images/dice3.png';
import dice4 from  '../assets/images/dice4.png';
import dice5 from  '../assets/images/dice5.png';
import dice6 from  '../assets/images/dice6.png';


const Dice = () => {
    const sides = [dice1, dice2, dice3, dice4, dice5, dice6];   //array de lados do dado (sao 6 lados)
    let randomIndex = Math.floor(Math.random() * sides.length);
    let randomSide = sides[randomIndex];
    
    const [dice, setDice] = useState(randomSide);

    const handleSideDice = () => {
        const sideDice = () => {
            setDice(diceEmpty)
        }
        setInterval(sideDice, 4000)      
    }

    useEffect(() => {
        if(dice === diceEmpty){
            clearInterval(handleSideDice)
            setDice(randomSide)
        }
    }, [dice])


    
  return (
    <div>
        <img src={dice} alt="dice" style={{width: 350, marginLeft: 45}} onClick={handleSideDice}/>
    </div>
  )
}

export default Dice;