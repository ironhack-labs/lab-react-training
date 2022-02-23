import './Dice.css'
import { useState } from "react"

const Dice = () => {

    let [diceSrc, setDiceSrc] = useState('./assets/images/dice-empty.png')

    function all() {
        setDiceSrc(`./assets/images/dice-empty.png`)
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * (6 - 1) + 1)
            setDiceSrc(`./assets/images/dice${randomNumber}.png`)
        }, 1000)
    }

    return (
        <img className='dice' src={diceSrc} alt='dice' onClick={all}></img>
    )

}

export default Dice