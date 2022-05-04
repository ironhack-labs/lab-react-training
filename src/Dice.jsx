import { useState } from "react"
import './dice-style.css'

const Dice = () => {

    const idRandom = Math.floor(Math.random() * 6 + 1)
    const [diceRandom, setRandomDice] = useState(`../images/dice${idRandom}.png`)

    const emptyDice = `../images/dice-empty.png`
    const toggleDice = () => {
        if (diceRandom != emptyDice) {
            setTimeout(() => {
                setRandomDice(emptyDice)
            }, 10)

        } else {
            setRandomDice(`../images/dice${idRandom}.png`)
        }
    }
    return (
        <div className="dice">
            <img onClick={toggleDice} src={diceRandom} alt=' Dice image' />
        </div>

    )
}
export default Dice