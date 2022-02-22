import { useState } from "react"
import dice0 from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

const Dice = () => {

    const diceClick = () => {
        setDiceIndex(0)
        setTimeout(() => { setDiceIndex(1 + Math.floor(Math.random() * 5)) }
            , 1000)
    }

    let diceImages = [dice0, dice1, dice2, dice3, dice4, dice5, dice6]

    const [diceIndex, setDiceIndex] = useState(0)

    return (
        <img onClick={diceClick} src={diceImages[diceIndex]} alt="Dice with 1-6 value" style={{ width: "200px" }} />
    )
}

export default Dice