import { useState } from 'react'
import './Dice.css'
import Img0 from '../../assets/images/dice-empty.png'
import Img1 from '../../assets/images/dice1.png'
import Img2 from '../../assets/images/dice2.png'
import Img3 from '../../assets/images/dice3.png'
import Img4 from '../../assets/images/dice4.png'
import Img5 from '../../assets/images/dice5.png'
import Img6 from '../../assets/images/dice6.png'


const Dice = () => {

    const images = [Img1, Img2, Img3, Img4, Img5, Img6]

    const getRandomDice = () => {
        return images[Math.floor(Math.random() * (images.length))]
    }

    const [dice, setDice] = useState(getRandomDice())

    const handleCurrentImg = () => {
        setDice(getRandomDice())
    }

    return (
        <img onClick={handleCurrentImg} src={dice} alt="Dice" />
    )

}

export default Dice