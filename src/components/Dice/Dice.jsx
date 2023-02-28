import { useState } from 'react'
import '../Dice/Dice.css'
import empty from '../../assets/images/dice-empty.png'
import side1 from '../../assets/images/dice1.png'
import side2 from '../../assets/images/dice2.png'
import side3 from '../../assets/images/dice3.png'
import side4 from '../../assets/images/dice4.png'
import side5 from '../../assets/images/dice5.png'
import side6 from '../../assets/images/dice6.png'

const diceArr = [side1, side2, side3, side4, side5, side6]
const Dice = () => {

    const [currentside, setside] = useState(side3)

    const changeside = () => {
        setside(empty)
        const number = Math.floor(Math.random() * (diceArr.length - 0) + 0)
        setTimeout(() => {
            setside(diceArr[number])
        }, 1000)
    }

    return (
        <div className='Dice'>
            <img onClick={changeside} src={currentside} alt="" />
        </div>
    )
}

export default Dice