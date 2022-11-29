import { useState } from "react"
import emptyDice from "./../assets/images/dice-empty.png"
import Dice1 from "./../assets/images/dice1.png"
import Dice2 from "./../assets/images/dice2.png"
import Dice3 from "./../assets/images/dice3.png"
import Dice4 from "./../assets/images/dice4.png"
import Dice5 from "./../assets/images/dice5.png"
import Dice6 from "./../assets/images/dice6.png"


const Dice = () => {

    const [diceValue, setDiceValue] = useState()

    const diceArray = [emptyDice, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

    const randomDice = Math.floor(Math.random() * diceArray.length)

    const handleDice = () => setDiceValue(!diceValue)


    return (
        <article >
            <img onClick={handleDice} src={diceValue ? Dice3 : diceArray[randomDice]} alt="" className="dice" />
        </article>
    )


}

export default Dice