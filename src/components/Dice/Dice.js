import { useState } from "react"

function Dice() {

    const [showDice, setShowDice] = useState("./assets/images/dice3.png")


    const dice = ["./assets/images/dice1.png", "./assets/images/dice2.png", "./assets/images/dice3.png", "./assets/images/dice4.png", "./assets/images/dice5.png", "./assets/images/dice6.png"]


    const diceChanges = () => {
        setShowDice("./assets/images/dice-empty.png")
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * dice.length )
            const randomDice = dice[randomIndex]
            setShowDice(randomDice)
            clearInterval(interval)
        }, 1000)
        
    }


    return (
        <div>
            <img style={{ width: "200px" }} src={showDice} onClick={() => {
                diceChanges()
            }} />
        </div>
    )
}

export default Dice