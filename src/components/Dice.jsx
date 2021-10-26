import React, {useState} from 'react'

function Dice() {
    const [dice, setdice] = useState('/img/dice-empty.png');

    function randomDice() {
        setdice('/img/dice-empty.png')
        setTimeout(() => {
            setdice("/img/dice" + randomIntFromInterval(1, 6) + ".png")}, 1000);
    }

    return (
        <div>
            <button onClick={randomDice}>
                <img className="dice" src={dice} alt="" />
            </button>
        </div>
    )
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default Dice
