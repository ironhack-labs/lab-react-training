import "./Dice.css"
import { useState } from 'react';


function Dice({ diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6 }) {
    const [dice, setDice] = useState(dice1);
    const dices = [dice1, dice2, dice3, dice4, dice5, dice6]

    const changeDice = () => {
        setDice(diceEmpty)
        setTimeout(() => {
            let random = Math.floor(Math.random() * 6)
            setDice(dices[random])

        }, 1000)
    }
    return (<>
        <img onClick={changeDice} className="diceImg" src={dice} />
    </>)
}
export default Dice