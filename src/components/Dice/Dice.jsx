import { useState } from "react"
import './Dice.css'

import img0 from '../../assets/images/dice-empty.png'
import img1 from '../../assets/images/dice1.png'
import img2 from '../../assets/images/dice2.png'
import img3 from '../../assets/images/dice3.png'
import img4 from '../../assets/images/dice4.png'
import img5 from '../../assets/images/dice5.png'
import img6 from '../../assets/images/dice6.png'

const Dice = () => {
    const imgArry = [img1, img2, img3, img4, img5, img6]

    const [showNumber, setCards] = useState(img0)

    const handleShowCards = () => {
        setCards(img0)
        setTimeout(() => {
            const randowImg = imgArry[Math.floor(Math.random() * imgArry.length)]
            setCards(randowImg)

        }, 1000)

    }

    return (
        <>
            <img className="card" onClick={handleShowCards} src={showNumber} alt='' />
        </>

    )
}

export default Dice