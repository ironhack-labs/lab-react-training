import React, { useState } from "react"


function Dice() {
    const emptyDice = '/assets/images/dice-empty.png'
    const [number, setNumber] = useState(emptyDice)

    const images = ['../assets/images/dice1.png','../assets/images/dice2.png','../assets/images/dice3.png','../assets/images/dice4.png','../assets/images/dice5.png','../assets/images/dice6.png']

    function numberDice() {
        setTimeout(() => {
            setNumber(emptyDice)
        }, 1000)
        
        const randomNumber = Math.floor(Math.random()*images.length)
        const randomImage = images[randomNumber]
        setNumber(randomImage)
    }
    return (
        <div>
            <button className="diceButton" onClick={numberDice}>
            <img src={number}/>
            </button>
        </div>
    )
}

export default Dice