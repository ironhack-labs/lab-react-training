import emptyDiceImg from '../../assets/images/dice-empty.png';
import oneDiceImg from '../../assets/images/dice1.png';
import twoDiceImg from '../../assets/images/dice2.png';
import threeDiceImg from '../../assets/images/dice3.png';
import fourDiceImg from '../../assets/images/dice4.png';
import fiveDiceImg from '../../assets/images/dice5.png';
import sixDiceImg from '../../assets/images/dice6.png';
import { useState } from 'react';
import './Dice.css';

function Dice(){
    const diceImg = [emptyDiceImg, oneDiceImg, twoDiceImg,threeDiceImg, fourDiceImg, fiveDiceImg, sixDiceImg];
    const [dice, setDice] = useState(3);

    const rollDice = () => {
        setDice(0);
        setTimeout(() => {
            setDice(Math.floor(Math.random() * 6) + 1);
        }, 1000);
    }

    return (
        <>
            <div className="dice">
                <img src={diceImg[dice]} alt="dice" onClick={rollDice}/>
            </div>
        </>
    )
}

export default Dice;