import { useState } from "react"

function Dice() {

    const randomDice = () => {
        if (Math.floor(Math.random() * (6 - 1 + 1) + 1) === 1) {
            return "./assets/images/dice1.png"
        }

        if (Math.floor(Math.random() * (6 - 1 + 1) + 1) === 2) {
            return "./assets/images/dice2.png"
        }

        if (Math.floor(Math.random() * (6 - 1 + 1) + 1) === 3) {
            return "./assets/images/dice3.png"
        }

        if (Math.floor(Math.random() * (6 - 1 + 1) + 1) === 4) {
            return "./assets/images/dice4.png"
        }

        if (Math.floor(Math.random() * (6 - 1 + 1) + 1) === 5) {
            return "./assets/images/dice5.png"
        }

        if (Math.floor(Math.random() * (6 - 1 + 1) + 1) === 6) {
            return "./assets/images/dice6.png"
        }
    }

    const [image, setImage] = useState(() => randomDice())

    const rollDice = () => {
        setImage("./assets/images/dice-empty.png")

        setTimeout(() => {
            setImage(randomDice())
        }, 1000);

    }

    return (
        <img onClick={() => rollDice()} src={image} />
    )
}


export default Dice