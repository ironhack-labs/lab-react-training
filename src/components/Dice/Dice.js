import { useState } from 'react';
import './Dice.css';

const Dice = () => {
    
    const randomNum = Math.floor(Math.random()*6+1);
    const [diceValue, setDiceValue] = useState(randomNum)

    const changeDice = () => {
        setDiceValue('-empty')
        setTimeout( ()=> {
            setDiceValue(Math.floor(Math.random() * 6 + 1))
        }, 1000)
        
    }

    return(
        <div className="dice">
            <img onClick={changeDice} src={`../../../assets/images/dice${diceValue}.png`} alt="" />
        </div>
    )
}

export default Dice