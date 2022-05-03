import { useState } from 'react'

const Dice = () => {

    let empty = './images/dice-empty.png'
    let randomNumber = Math.floor(Math.random() * (6 - 1) + 1)

    const [diceValue, setDiceValue] = useState(`./images/dice${randomNumber}.png`)

    const toggleImg = () => {
        setDiceValue(empty)
        setTimeout(() => {
            setDiceValue(`./images/dice${randomNumber}.png`)
        }, 1000)
    }

    return (
        <div className="Dice">
            <img src={diceValue} alt="dice" onClick={toggleImg}></img>
        </div>
    )
}

export default Dice






