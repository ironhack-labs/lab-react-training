import dice_0 from '../../assets/images/dice-empty.png' 
import dice_1 from '../../assets/images/dice1.png'
import dice_2 from '../../assets/images/dice2.png'
import dice_3 from '../../assets/images/dice3.png'
import dice_4 from '../../assets/images/dice4.png'
import dice_5 from '../../assets/images/dice5.png'
import dice_6 from '../../assets/images/dice6.png'
import './Dice.css'
import { useState, React } from 'react'

export const Dice =()=>{
    const dices = [dice_1,dice_2,dice_3,dice_4,dice_5,dice_6]
    const [diceImg, setDiceImg] = useState(dice_0);

    const random=()=>{
        return Math.round(Math.random()*5)
    }
    const dc =()=>{ 
        setDiceImg(dice_0)
        setTimeout(() => {
            setDiceImg(dices[random()])
        }, 1000);
    }
    window.addEventListener('load',()=>{
        dc();
    })
    return(
        <div className='div-dice'>
            <img src={diceImg} alt="dice" onClick={dc} className='img-dice'></img>
        </div>
    )
}
