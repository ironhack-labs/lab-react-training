import './Dice.css'
import { useState } from 'react'

function Dice({ img, imgClicked }) {


    const randomValue = () => Math.floor(Math.random() * 5) + 1
    const [diceNumber, setDiceNumber] = useState(randomValue)

    const startDice = () => {
        setDiceNumber("-empty")
        setTimeout(() => setDiceNumber(randomValue), 1000);
    }

    return (
        <div>
            <button onClick={startDice}>
                <img class="dice" src={"../images/dice" + diceNumber + ".png"} alt="" />
            </button>

        </div>
    )

}


export default Dice