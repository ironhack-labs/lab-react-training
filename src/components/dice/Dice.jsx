import { useState } from "react";
import dice0 from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'



function Dice() {
    const allDices = [dice0, dice1, dice2, dice3, dice4, dice5, dice6]
    const [dice, setDice] = useState(allDices[0])
    const rollDice = () => {
        const randomNumber = Math.floor(Math.random() * (allDices.length - 2) + 1)
        setDice(allDices[0])
        setTimeout(() => setDice(allDices[randomNumber]), 1000)
    }
    return (
        <div>
            <img onClick={rollDice} src={dice} style={{ width: "90px" }} />
        </div>
    )
}

export default Dice
