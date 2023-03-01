import { useState } from "react";
import './Dice.css'
import empty from '../../assets/images/dice-empty.png'
import diceone from '../../assets/images/dice1.png'
import dicetwo from '../../assets/images/dice2.png'
import dicethree from '../../assets/images/dice3.png'
import dicefour from '../../assets/images/dice4.png'
import dicefive from '../../assets/images/dice5.png'
import dicesix from '../../assets/images/dice6.png'


const Dice = () => {
    const [dice, setDice] = useState(empty)

    const diceArray = [diceone, dicetwo, dicethree, dicefour, dicefive, dicesix]


    const rollDice = () => {
        setDice(empty)

        const interval = setInterval(() => {
            const randomDice = diceArray[Math.floor(Math.random() * diceArray.length)]
            setDice(randomDice)
            clearInterval(interval)
        }, 1000);
    }

    return (
        <div className="dice">
            <img className="dices" src={dice} alt="" onClick={rollDice} />
        </div>
    )
}

export default Dice