import diceOne from './../assets/images/dice1.png'
import diceTwo from './../assets/images/dice2.png'
import diceThree from './../assets/images/dice3.png'
import diceFour from './../assets/images/dice4.png'
import diceFive from './../assets/images/dice5.png'
import diceSix from './../assets/images/dice6.png'
import emptyDice from './../assets/images/dice-empty.png'
import { useState } from 'react'


const diceImages = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]

function Dice() {

    const [diceSide, setDiceSide] = useState(getRandomDicePic())

    function getRandomDicePic() {
        const index = Math.round(Math.random() * 5)
        return diceImages[index]
    }


    function handleDiceRole() {
        setDiceSide(emptyDice)
        setTimeout(()=> {
            setDiceSide(getRandomDicePic())
        }, 1000)
    }

    return (
        <div onClick={handleDiceRole}>
            <img style={{width: "200px"}} src={diceSide} alt="dice"/>
        </div>
    )
}

export default Dice;