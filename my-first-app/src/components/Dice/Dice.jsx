import { useState } from "react"
import diceEmpty from "./../../assets/dice-empty.png"
import dice1 from "./../../assets/dice1.png"
import dice2 from "./../../assets/dice2.png"
import dice3 from "./../../assets/dice3.png"
import dice4 from "./../../assets/dice4.png"
import dice5 from "./../../assets/dice5.png"
import dice6 from "./../../assets/dice6.png"
import "./Dice.css"


const Dice = () => {

    const [currentDice, setCurrentDice] = useState(diceEmpty)

    const randomDice = () => {
        setCurrentDice(diceEmpty)

        setTimeout(() => {
            const diceImgs = [dice1, dice2, dice3, dice4, dice5, dice6]

            const randomFace = diceImgs[Math.floor(Math.random() * diceImgs.length)]
            setCurrentDice(randomFace)
        }, 1000)
    }
    return (
        <div className="Dice" onClick={randomDice}>
            <img src={currentDice} alt="dice" style={{ height: 300 }} />
        </div>
    )
}

export default Dice