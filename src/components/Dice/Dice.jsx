import { useState } from "react";
import diceEmpty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

const Dice = () => {

    const allDice = [dice1, dice2, dice3, dice4, dice5, dice6]

    const [clickDice, setClickDice] = useState(diceEmpty)

    const randomDice = allDice[Math.floor(Math.random() * allDice.length)]

    const handleClick = () => {
        setClickDice(diceEmpty)

        setTimeout(() => {

            return setClickDice(randomDice)

        }, 1000);
    }

    return (
        <img src={clickDice}
            onClick={handleClick}
            className="clickDice"
            style={{ width: 100 }}
        />
    )
}
export default Dice
