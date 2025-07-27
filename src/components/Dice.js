import { useState } from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';


function Dice() {
    const DiceArray = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6];
    const [isDiceEmpty, setIsDiceEmpty] = useState(true);

    const toggleDice = () => { 
        setIsDiceEmpty(!isDiceEmpty);
    }

    const randomDiceImage = () => {
        const randomIndex = Math.floor(Math.random() * 6);
        const diceImage = DiceArray[randomIndex];
        return diceImage;
    }

    return <div>
        <img onClick={toggleDice} src={isDiceEmpty ? emptyDice : randomDiceImage()} width="200" alt="Dice"/>
    </div>
}

export default Dice;
