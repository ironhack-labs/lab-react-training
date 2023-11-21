import { useState } from "react"

import diceEmpty from "./../../assets/dice-empty.png"
import dice1 from "./../../assets/dice1.png"
import dice2 from "./../../assets/dice2.png"
import dice3 from "./../../assets/dice3.png"
import dice4 from "./../../assets/dice4.png"
import dice5 from "./../../assets/dice5.png"
import dice6 from "./../../assets/dice6.png"

const Dice = () => {

    const diceArray = [
        diceEmpty,
        dice1,
        dice2,
        dice3,
        dice4,
        dice5,
        dice6
    ]

    const [dice, setDice] = useState(diceEmpty)

    function changeImage() {

        const randomNumber = Math.floor(Math.random() * diceArray.length)

        const diceRandom = diceArray[randomNumber]

        setDice(diceRandom)


    }

    return (

        <div>
            <button onClick={() => changeImage()}>
                <img src={dice} alt="random-die"
                    style={{ marginBottom: "10px", width: "300px" }} />
            </button>
        </div>

    )
}

export default Dice