import { useState } from 'react'
import dice0 from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
import dice6 from '../assets/images/dice6.png'

function Dice () {

    const diceArray=[dice0, dice1, dice2, dice3, dice4, dice5, dice6]
    let randomDice = Math.floor(Math.random()*6+1)
    const [diceState, setDiceState] = useState(diceArray[randomDice]);

    function changeDice () {
        setDiceState(dice0);
        setTimeout(()=>{
            setDiceState(diceArray[randomDice]);
        }, 1000)        
    }

    return (
        <div>
            <h3>Iteration 10</h3>
            <img onClick={()=>changeDice()} src={diceState} alt="dice" width={250}/>
        </div>
    )
}
export default Dice