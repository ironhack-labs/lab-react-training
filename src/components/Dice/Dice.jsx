import { useState } from "react"
import './Dice.css'
import dice0 from '../../assets/dice-empty.png'
import dice1 from '../../assets/dice1.png'
import dice2 from '../../assets/dice2.png'
import dice3 from '../../assets/dice3.png'
import dice4 from '../../assets/dice4.png'
import dice5 from '../../assets/dice5.png'
import dice6 from '../../assets/dice1.png'

const Dice = () => {

    const randomArray = [dice1, dice2, dice3, dice4, dice5, dice6]

    const [random, setRandom] = useState(dice3)

    const handleRandom = () => {

        setRandom(dice0)

        const face = Math.floor(Math.random() * randomArray.length)


        setTimeout(() => {
            setRandom(randomArray[face])
        }, 1000);


    }

    return (
        <div onClick={handleRandom} className="dice-container">
            <img className="dice" src={random} alt="" />
        </div>
    )

}


export default Dice