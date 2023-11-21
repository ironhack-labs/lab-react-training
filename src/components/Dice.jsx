import dadoNulo from "./../assets/images/dice-empty.png"
import dado1 from "./../assets/images/dice1.png"
import dado2 from "./../assets/images/dice2.png"
import dado3 from "./../assets/images/dice3.png"
import dado4 from "./../assets/images/dice4.png"
import dado5 from "./../assets/images/dice5.png"
import dado6 from "./../assets/images/dice6.png"
import { useState } from "react"

const Dice = () => {

    const [dice, setDice] = useState(dado1)

    const randomDice = () => {
        const value = Math.floor(Math.random() * (6 - 1) + 1);

        console.log(value);
        switch (value) {
            case 1:
                return setDice(dado1)
            case 2:
                return setDice(dado2)
            case 3:
                return setDice(dado3)
            case 4:
                return setDice(dado4)
            case 5:
                return setDice(dado5)
            case 6:
                return setDice(dado6)
            default:
                break;
        }
    }

    const handleDice = () => {
        setDice(dadoNulo)
        setTimeout(() => {
            setDice(randomDice)
        }, 1000);
    }

    return (
        <img className="Dice" src={dice} alt="img" onClick={handleDice} />
    )
}

export default Dice