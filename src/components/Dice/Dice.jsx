import { useState } from "react"
import "./Dice.css"
import emptyDice from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'

const dicesArray = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6]


const Dice = () => {
    const [dice, setDice] = useState()
    const randomDice = Math.floor(Math.random() * dicesArray.length)
    const rolldice = () => setDice(!dice)
    return (
        <div className="Dice">
            <img onClick={rolldice} src={dice ? emptyDice : dicesArray[randomDice]} alt="" />
        </div>
    )
}
export default Dice