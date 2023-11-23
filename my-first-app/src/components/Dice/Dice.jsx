import defaulDice from "./../../assets/dice-empty.png"
import dice1 from "./../../assets/dice1.png"
import dice2 from "./../../assets/dice2.png"
import dice3 from "./../../assets/dice3.png"
import dice4 from "./../../assets/dice4.png"
import dice5 from "./../../assets/dice5.png"
import dice6 from "./../../assets/dice6.png"

import { useState } from "react"


function Dice() {

    const imgs = [dice1, dice2, dice3, dice4, dice5, dice6]
    const [dice, setDice] = useState(defaulDice)


    const randomDice = () => {
        const randomIndex = Math.floor(Math.random() * imgs.length)
        console.log(imgs[randomIndex])
        return imgs[randomIndex]
    }

    const handleDice = () => {
        setDice(randomDice())
    }

    return (

        <figure className="Dice" onClick={() => handleDice()}>
            <img src={dice} alt="" />
        </figure>
    )

}

export default Dice