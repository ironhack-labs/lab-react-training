import { useEffect, useState } from 'react';
import DiceEmpty from '../assets/images/dice-empty.png';
import DiceOne from '../assets/images/dice1.png';
import DiceTwo from '../assets/images/dice2.png';
import DiceThree from '../assets/images/dice3.png';
import DiceFour from '../assets/images/dice4.png';
import DiceFive from '../assets/images/dice5.png';
import DiceSix from '../assets/images/dice6.png';
import './Dice.css'

const Dice = () => {
    const arrDice = [DiceOne,DiceTwo,DiceThree,DiceFour,DiceFive,DiceSix]
    let numberRandom = Math.floor(Math.random()*arrDice.length) 
    let randomDice = arrDice[numberRandom]
    const [dice,setDice] = useState(randomDice)

    const changeDice = () =>{
      const dice = () => {
        setDice(DiceEmpty)
      }
     setInterval(dice,3000);
    }
    useEffect(()=>{
      if(dice === DiceEmpty) {
        clearInterval(changeDice)
        setDice(randomDice)
      }
    },[dice])
    return(
      <div>
        <img id='dice' onClick={()=>{changeDice()}} src={dice} alt={dice}/>
      </div>
    )
}
export default Dice