import React, {useState} from 'react'

function Dice() {
    const [dice, setdice] = useState('/img/dice-empty.png');


    return (
        <div>
            <button onClick={randomDice}>
                <img src={dice} alt="" />
            </button>
        </div>
    )
}

export default Dice
