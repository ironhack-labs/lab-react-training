import "./Dice.css"
import Face1 from '../../assets/images/dice1.png'
import Face2 from '../../assets/images/dice2.png'
import Face3 from '../../assets/images/dice3.png'
import Face4 from '../../assets/images/dice4.png'
import Face5 from '../../assets/images/dice5.png'
import Face6 from '../../assets/images/dice6.png'
import Face0 from '../../assets/images/dice-empty.png'

import { useState, useEffect } from "react";



const Dice = () => {
    const diceArr = [Face1, Face2, Face3, Face4, Face5, Face6]
    console.log(diceArr)
    const [diceSide, setDiceSide] = useState(Face0)


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setDiceSide((diceSide) => diceArr[randomPos]);
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, []);
    const rollDice = () => {

        const randomPos = Math.floor(Math.random() * diceArr.length)
        console.log(diceArr.length)
        console.log(randomPos)
        setDiceSide(diceArr[randomPos])
    }

    return (
        <>
            <img src={diceSide} className='diceImg' />
            <button onClick={rollDice}>Roll the dice</button>
        </>



    )
}


export default Dice;