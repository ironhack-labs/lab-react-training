
import { useState } from "react"
import defaultDice from "/src/assets/dice-empty.png"
import dice1 from "/src/assets/dice1.png"
import dice2 from "/src/assets/dice2.png"
import dice3 from "/src/assets/dice3.png"
import dice4 from "/src/assets/dice4.png"
import dice5 from "/src/assets/dice5.png"
import dice6 from "/src/assets/dice6.png"


const Dice = () => {

    const [dice, setDice] = useState(dice3)

    const handler = () => {
        const number = Math.floor(Math.random() * 6)

        switch (number) {

            case 1:
                setDice(defaultDice)
                setTimeout(() => {
                    setDice(dice1)
                }, 500);
                break

            case 2:
                setDice(defaultDice)
                setTimeout(() => {
                    setDice(dice1)
                }, 500);
                break

            case 3:
                setDice(defaultDice)
                setTimeout(() => {
                    setDice(dice3)
                }, 500);
                break

            case 4:
                setDice(defaultDice)
                setTimeout(() => {
                    setDice(dice4)
                }, 500);
                break

            case 5:
                setDice(defaultDice)
                setTimeout(() => {
                    setDice(dice5)
                }, 500);
                break

            case 6:
                setDice(defaultDice)
                setTimeout(() => {
                    setDice(dice6)
                }, 500);
                break
        }
    }


    return (
        <div onClick={handler}>
            <img src={dice} alt="dice" />
        </div>
    )
}

export default Dice