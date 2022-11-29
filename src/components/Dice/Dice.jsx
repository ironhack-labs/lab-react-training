import emptyDice from "../../assets/images/dice-empty.png"
import dice1 from "../../assets/images/dice1.png"
import dice2 from "../../assets/images/dice2.png"
import dice3 from "../../assets/images/dice3.png"
import dice4 from "../../assets/images/dice4.png"
import dice5 from "../../assets/images/dice5.png"
import dice6 from "../../assets/images/dice6.png"
import { useState } from "react"

const Dice = () => {

    const arrDice = [dice1, dice2, dice3, dice4, dice5, dice6]

    const initialDice = Math.floor(Math.random() * arrDice.length)

    const [currentImage, setImage] = useState(arrDice[initialDice])



    const rollDice = () => {

        const finalDice = Math.floor(Math.random() * arrDice.length)
        setImage(emptyDice)

        setTimeout(() => {
            setImage(arrDice[finalDice])
        }, 1000)

    }

    return (
        <img src={currentImage} alt="dice" onClick={rollDice} />
    )

}

export default Dice