import { useState } from "react"
import dice from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

function Dice() {

    const allDice = [dice1, dice2, dice3, dice4, dice5, dice6]
    const [randomDice, setRandomDice] = useState(dice)
    
    function randomDices() {
        const randomNumber = Math.floor(Math.random() * allDice.length)
        setRandomDice(allDice[randomNumber])
    }

    return (
        <div onClick={randomDices} >
            <img style={{ width: 100, height: 100 }} src={randomDice} />
        </div>
    )
}

export default Dice;