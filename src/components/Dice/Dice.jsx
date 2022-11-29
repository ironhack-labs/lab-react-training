import { useState } from "react"
import './Dice.css'

const Dice = () => {

    const randomNumber = Math.floor(Math.random() * (6)) + 1

    let randomDice


    switch (randomNumber) {
        case 1:

            randomDice = <img src='../assets/images/dice1.png' />



            break;

        case 2:

            randomDice = <img src='../assets/images/dice2.png' />



            break;

        case 3:

            randomDice = <img src='../assets/images/dice3.png' />



            break;

        case 4:

            randomDice = <img src='../assets/images/dice4.png' />



            break;

        case 5:

            randomDice = <img src='../assets/images/dice5.png' />



            break;

        case 6:

            randomDice = <img src='../assets/images/dice6.png' />



            break;


    }


    let emptyDice = <img src='../assets/images/dice-empty.png' />


    const [showDice, setShowDice] = useState(randomDice)

    const handleShowDice = () => setShowDice(!showDice)

    console.log(randomDice)

    return (

        <button className="DiceButton" onClick={handleShowDice}>

            {showDice ? emptyDice : randomDice}

        </button>

    )

}

export default Dice


