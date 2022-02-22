import { useEffect, useState } from 'react';
import diceEmp from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png';
import dice2 from '../../assets/images/dice2.png';
import dice3 from '../../assets/images/dice3.png';
import dice4 from '../../assets/images/dice4.png';
import dice5 from '../../assets/images/dice5.png';
import dice6 from '../../assets/images/dice6.png';
import './styleDice.css'

const Dice = () => {
    const dices = [ diceEmp, dice1, dice2, dice3, dice4, dice5, dice6];
    const [ diceImg, setDiceImg ] = useState(dices[0]);
    const [ random, setRandom ] = useState(0);

    const randomDice = () => {
        setRandom(Math.floor(Math.random() * ( 6 - 1 ) + 1))
    };

    useEffect(() => {
        setTimeout(() => {
            setDiceImg(dices[random])
        }, 3000)
    }, [random]);
    
    return (
        <div className="Dice" onClick={randomDice}>
        <img src={diceImg} alt='icon-dice' />
        </div>
    )
};

export default Dice;