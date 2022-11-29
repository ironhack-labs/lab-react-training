import { useState } from 'react'
import './Dice.css'
import Img0 from './../assets/images/dice-empty.png'
import Img1 from './../assets/images/dice1.png'
import Img2 from './../assets/images/dice2.png'
import Img3 from './../assets/images/dice3.png'
import Img4 from './../assets/images/dice4.png'
import Img5 from './../assets/images/dice5.png'
import Img6 from './../assets/images/dice6.png'


const Dice = () => {

    const [dice, setDice] = useState(Img0)

    const throwDice = () => setDice(!dice)

    let img
    const num = Math.floor(Math.random() * 6 + 1)

    setInterval(() => {

    }, 1000)

    switch (num) {
        case 1:
            img = Img1
            break

        case 2:
            img = Img2
            break

        case 3:
            img = Img3
            break

        case 4:
            img = Img4
            break

        case 5:
            img = Img5
            break

        case 6:
            img = Img6
            break
        // default:
        //     img = Img0

    }


    return (

        <img className='Dice' onClick={throwDice} src={`${img}`} alt='dice' />


    )

}

export default Dice

