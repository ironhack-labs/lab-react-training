import { useState } from 'react';
import diceEmpty from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

const diceArr = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];

const randomIndex = () => {
    return Math.floor(Math.random() * (diceArr.length))
}

const Dice = (props) => {
    const [myDice, setMyDice] = useState(4)

    const randomDice = () => {
        setMyDice(0)
        setTimeout(() => {
            setMyDice(randomIndex());
        }, 1000);
    }

    return (
        <section className="dice">
            <img src={diceArr[myDice]} alt="dice" onClick={() => randomDice()} />
        </section>
    );
}

export default Dice

