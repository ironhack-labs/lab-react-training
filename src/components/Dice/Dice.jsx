import { useState } from 'react';
import "./Dice.css"

const Dice = ({ EmptyDice, dice1, dice2, dice3, dice4, dice5, dice6 }) => {

    const [dice, setdice] = useState(EmptyDice)
    const dices = [dice1, dice2, dice3, dice4, dice5, dice6]

    const changeDice = () => {
        setdice(EmptyDice)
        setTimeout(() => {
            let numberRandom = Math.floor(Math.random() * 6)
            setdice(dices[numberRandom])
        }, "1000")

    }

    return (
        <img onClick={changeDice} className="dice" src={dice} alt="emptyDice" />
    )
}










export default Dice;
