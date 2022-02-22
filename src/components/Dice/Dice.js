import { useState } from "react"
import "./Dice.css"


const Dice = () =>{
    const dicesArr = ["./images/dice-empty.png","./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]
    
    const [diceNumber, setDiceNumber] = useState(0)
    const [dice, setDice] = useState(dicesArr[diceNumber])
    
    const getRandomNum = () =>{
        return setDiceNumber(Math.floor(1 + Math.random() * 6 ))
    }
    const setDiceImg = () =>{
        if (diceNumber === 1) {
            setDice(dicesArr[diceNumber])
        } else  if (diceNumber === 2) {
            setDice(dicesArr[diceNumber])
        } else  if (diceNumber === 3) {
            setDice(dicesArr[diceNumber])
        } else  if (diceNumber === 4) {
            setDice(dicesArr[diceNumber])
        } else  if (diceNumber === 5) {
            setDice(dicesArr[diceNumber])
        } else  if (diceNumber === 6) {
            setDice(dicesArr[diceNumber])
        }
    }

    return (
        <div>
            <img className="Dice" src={dice} onClick={() =>setDiceImg(getRandomNum())} />
        </div>
    )
}

export default Dice