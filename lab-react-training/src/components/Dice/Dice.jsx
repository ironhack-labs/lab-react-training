import './Dice.css'
import { useState } from 'react'
import original from './../../../public/dice-empty.png'
import da1 from './../../../public/dice1.png'
import da2 from './../../../public/dice2.png'
import da3 from './../../../public/dice3.png'
import da4 from './../../../public/dice4.png'
import da5 from './../../../public/dice5.png'
import da6 from './../../../public/dice6.png'




const Dice = () => {

    const arrayDice = [da1, da2, da3, da4, da5, da6]
    const random = arrayDice[Math.floor(Math.random() * arrayDice.length)];


    const [diceImage, setDiceImage] = useState(original)

    const handleDice = () => {

        setDiceImage(original)

        setTimeout(() => {

            setDiceImage(random)

        }, 1000)



    }

    return (
        <div onClick={handleDice}>

            <img className="LikeButton" src={diceImage} alt="" />

        </div>
    )


}

export default Dice