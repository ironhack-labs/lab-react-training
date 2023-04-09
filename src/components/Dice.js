import { useState } from "react"
import dice0 from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

function Dice() {
    const dice = [dice0, dice1, dice2, dice3, dice4, dice5, dice6]
    const randomIndex = Math.floor(Math.random() * 6) + 1

    const [diceIndex, setDiceIndex] = useState(randomIndex)


    function handleClick() {
        setDiceIndex(0)
        setTimeout(() => {
            setDiceIndex(randomIndex)
        }, 1000);
    }

    return (
        <div className="diceDiv">
            <img src={dice[diceIndex]} alt="" onClick={handleClick}/>
        </div>
    )
}

export default Dice;