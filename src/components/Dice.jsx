import { useState } from 'react'
import emptyDice from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

function Dice() {
    const randomImage = [{ dice: dice1 }, { dice: dice2 }, { dice: dice3 }, { dice: dice4 }, { dice: dice5 }, { dice: dice6 }]; // key dice1 : value: 'string link to image'

    const [dice, setDice] = useState(randomImage[0].dice)

    const randomNum = +Math.floor(Math.random() * randomImage.length);
    const newImage = randomImage[randomNum].dice
    console.log(newImage)

    const diceDelay = () => {
        setTimeout(() => {
            setDice(newImage)
        }, 1000);
    }

    const emptyDiceDelay = () => {
        setTimeout(() => {
            setDice(emptyDice);
        }, 10)
    }

    console.log(dice)

    return (
        <div>
            <img src={dice} alt="dice-3" style={{ width: '200px' }} onClick={() => {
                emptyDiceDelay()
                diceDelay()
            }}
            />
        </div>

    )
}

export default Dice;