import { useState } from "react";
import dice from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'
import './Dice.css'

const diceImages = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6
]
function Dice() {

    const [status, setStatus] = useState(dice)

    const changeDice = () => {
        setStatus(dice)
        const randomNumber = Math.floor(Math.random() * (6 - 0) + 0)
        setTimeout((() => setStatus(diceImages[randomNumber])), 500)
    }

    return (
        <figure className="Dice" onClick={changeDice}>
            <img src={status} alt="" />
        </figure>
    );
}

export default Dice;
