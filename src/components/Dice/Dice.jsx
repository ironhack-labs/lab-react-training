import { useState } from "react"
import "./Dice.css"
import diceEmpty from "./../../assets/images/dice-empty.png"
import dice1 from "./../../assets/images/dice1.png"
import dice2 from "./../../assets/images/dice2.png"
import dice3 from "./../../assets/images/dice3.png"
import dice4 from "./../../assets/images/dice4.png"
import dice5 from "./../../assets/images/dice5.png"
import dice6 from "./../../assets/images/dice6.png"



const Dice = () => {


    const dice = [dice1, dice2, dice3, dice4, dice5, dice6,]

    const [Dice, SetDice] = useState(false)

    function getRandomInt(min = 0, max = 5) {
        let rundomNum = parseInt(Math.floor(Math.random() * (max - min) + min))
        let rundonDice = dice[rundomNum]
        return rundonDice
    }


    const handleClick = () => {

        SetDice(!Dice)
    }


    return <>
        <div className="Picture">
            <img className="dice" src={Dice ? getRandomInt() : diceEmpty}
                onClick={handleClick} alt="" />
        </div>
    </>
}

export default Dice   