import "./Dice.css"
import { useState } from "react"


function Dice() {

    let randomDice = Math.floor(Math.random() * (6 - 1) + 1)
    let imageSrc = `../assets/images/dice${randomDice}.png`

    let randomDice2 = Math.floor(Math.random() * (6 - 1) + 1)
    let imageSrc2 = `../assets/images/dice${randomDice2}.png`

    let [newDice, setNewDice] = useState(imageSrc)

    function throwDice(str) {

        setNewDice(str)

        setTimeout(() => setNewDice(imageSrc2), 1000)

    }

    return (

        <img className="dice" alt="" src={newDice} onClick={() => throwDice("../assets/images/dice-empty.png")} />
    )

}

export default Dice