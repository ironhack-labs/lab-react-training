import './Dice.css'
import dice0 from './../../assets/Dices/dice-empty.png'
import dice1 from './../../assets/Dices/dice1.png'
import dice2 from './../../assets/Dices/dice2.png'
import dice3 from './../../assets/Dices/dice3.png'
import dice4 from './../../assets/Dices/dice4.png'
import dice5 from './../../assets/Dices/dice5.png'
import dice6 from './../../assets/Dices/dice6.png'
import { useState } from 'react'


const Dice = () => {

    const [number, setnumber] = useState(dice0)

    const handleDice = () => {

        const Random = Math.floor(Math.random() * (6 - 1 + 1))
        setnumber(`dice${Random}`)


    }



    return (
        <div className='dice' onClick={handleDice}>

            <img src={number} alt="" />
        </div>
    )


}

export default Dice