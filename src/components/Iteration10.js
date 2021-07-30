import { useState, useEffect} from "react";

const Dice = () => {
    const [random, setRandom] = useState(1)

    const randomNumber = () => {
        return Math.floor(6*Math.random()) + 1 
    }

    const handleClick = () => {
        if (random) {
            setRandom(null)
            setTimeout(() => {
              setRandom(randomNumber())
            }, 1000)
          }
    }

    const getDice = () => {
        if(random) {
            return `/img/dice${random}.png`
        } else {
            return `/img/dice-empty.png`
        }
    }

    return (
        <img className = "image"
        onClick={handleClick}
        src={getDice()} />
    )
}

export default Dice;