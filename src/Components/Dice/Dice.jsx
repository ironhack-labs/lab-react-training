import { useState } from "react"
import diceEmpty from './../../assets/images/dice-empty.png'
import diceOne from './../../assets/images/dice1.png'
import diceTwo from './../../assets/images/dice2.png'
import diceThree from './../../assets/images/dice3.png'
import diceFour from './../../assets/images/dice4.png'
import diceFive from './../../assets/images/dice5.png'
import diceSix from './../../assets/images/dice6.png'

const Dice = () => {

    // const [diceValue, setDiceValue] = useState(true)

    // const toggleImg = () => {
    //     setImgValue(!imgValue)
    // }


    return (
        <>
            <div className="dice">

                <img src={diceEmpty} alt="DiceEmpty" />

            </div>
        </>

    )

}


export default Dice


/////////////////////////////

// -show an random img
// -click and show white Dice
// -wait a second
// .setTimeout()
// -show random img