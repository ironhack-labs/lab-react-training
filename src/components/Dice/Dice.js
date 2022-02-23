
import { useState } from "react"

const Dice = () => {

    const [random, setRandom] = useState(1)

    const getRandomValue = () => {
        return Math.floor(Math.random() * 6) + 1
    }

    const src = `/assets/images/dice${random}.png`;  


    const handleClickDice = () => {
        const getRandom = getRandomValue()
        setRandom(`-empty`)


        setTimeout(() => { setRandom(getRandom) }, 1000)
    }

    return (
        <div> 

            <img src={src} alt="Dice" onClick={handleClickDice} />

        </div>
    )
}

export default Dice