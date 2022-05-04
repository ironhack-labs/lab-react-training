import './Dice.css'
import { useState } from 'react'

const Dice = () => {

    const randomSix = () => {
        return Math.round(Math.random() * (5) + 1)
    }
    const [diceValue, setDiceValue] = useState(`../images/dice${randomSix()}.png`)

    const changePicture = () => {

        setDiceValue(`../images/dice-empty.png`)
        setTimeout(() => { setDiceValue(`../images/dice${randomSix()}.png`) }, 1000);
    }

    return (
        <button onClick={changePicture} >
            <img src={diceValue} alt='image' className='dice' />
        </button>
    )
}

export default Dice