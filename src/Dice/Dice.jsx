import { useState } from 'react'

function Dice() {

    const [diceValue, setDiceValue] = useState('../../assets/images/dice3.png')

    const randomNum = parseInt(Math.random() * (6 - 1) + 1)

    const changeDice = event => {
        setDiceValue(event.target.src = '../../assets/images/dice-empty.png')
        setTimeout(() => {
            setDiceValue(event.target.src = `../../assets/images/dice${randomNum}.png`)
        }, 1000);
    }

    return (
        <figure className="dice">
            <img src={diceValue} onClick={changeDice} width="200px" height="200" />
        </figure>
    )
}

export default Dice;
