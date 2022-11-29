import { useState } from 'react'
import './Dice.css'


import EmptyDice from '../../assets/images/dice-empty.png'
import Dice1 from '../../assets/images/dice1.png'
import Dice2 from '../../assets/images/dice2.png'
import Dice3 from '../../assets/images/dice3.png'
import Dice4 from '../../assets/images/dice4.png'
import Dice5 from '../../assets/images/dice5.png'
import Dice6 from '../../assets/images/dice6.png'

const Dices = [EmptyDice, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]



const Dice = () => {

    const [index, setRandomIndex] = useState(Math.floor(Math.random() * ((Dices.length - 2) - 1 + 1) + 1))

    const changeDice = () => {
        setRandomIndex(0)
        setTimeout(() => {
            setRandomIndex(Math.floor(Math.random() * ((Dices.length - 2) - 1 + 1) + 1))
        }, 1000)
    }



    return (
        <div className="ClickablePicture">
            <img src={Dices[index]} alt="Dice" onClick={changeDice} />
        </div>
    )

}

export default Dice