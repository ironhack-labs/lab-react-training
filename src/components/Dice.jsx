import emptyDice from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"
import {useState} from "react"

function Dice() {
  const diceArr = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6];
  
  const [dice, setDice] = useState(diceArr[Math.floor(Math.random()*7)])
  const changeDice = () =>{
    setDice(diceArr[0]);
    setTimeout(() =>{
      setDice(diceArr[Math.floor(Math.random()*6)+1])
    }, 1000)
  }


  return (
    <img src={dice} alt="dice" style={{width: "100px"}} onClick = {changeDice}/>
  )
}

export default Dice