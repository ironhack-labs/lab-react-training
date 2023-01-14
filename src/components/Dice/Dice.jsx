import { useState } from 'react'
import emptyDice from '../../assets/images/dice-empty.png'
import numberOneDice from '../../assets/images/dice1.png'
import numberTwoDice from '../../assets/images/dice2.png'
import numberThreeDice from '../../assets/images/dice3.png'
import numberFourDice from '../../assets/images/dice4.png'
import numberFiveDice from '../../assets/images/dice5.png'
import numberSixDice from '../../assets/images/dice6.png'
import './Dice.css'



function Dice(){

    let diceArrays = [emptyDice,numberOneDice, numberTwoDice, numberThreeDice, numberFourDice, numberFiveDice, numberSixDice]
let randomNumber = Math.floor(Math.random()*diceArrays.length)

let diceFace = diceArrays[randomNumber]
    

    const [diceNumber, setDiceNumber] = useState(diceFace)      
    
    const randomize = () =>{
        setTimeout(()=>{
            let newRandomNumber = Math.floor(Math.random()*diceArrays.length)
            let newDiceFace = diceArrays[newRandomNumber]
            setDiceNumber(newDiceFace)
        }, 1000)
        setDiceNumber(emptyDice)
        
        
    }

    return(
        <div>
            <img onClick={()=>randomize()} className='minified' src={diceNumber}/>
        </div>
    )
}

export default Dice