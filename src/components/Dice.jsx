import { useState } from 'react';
import dice0 from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

function Dice() {
    const diceArray = [dice1, dice2, dice3, dice4, dice5, dice6];
    const [dice, setDice] = useState(randomDice())
console.log('dice1', dice1)
    
    
    function randomDice() {
        return diceArray[Math.floor(Math.random() * diceArray.length)]
    }
    function roll() {
        setDice(dice0);
const timer= setTimeout( (() =>
            setDice(randomDice())), 1000) 
        return timer;
        
    }



    return (
        <div>
            <img style={{ width: '80px' }} src={dice} alt="dice"
                onClick={
                    roll
                     }
            /> 
        </div>
        
    
    )
    
    


}

export default Dice;