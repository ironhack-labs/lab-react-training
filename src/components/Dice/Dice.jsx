import { useState } from 'react';
import './Dice.css'
import diceEmpty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'



const Dice = () => {

    const diceImgs = [dice1, dice2, dice3, dice4, dice5, dice6]

    const [image, setImage] = useState(dice1);
    // setTimeout(setImage(diceEmpty), 1000)

    const changeImg = () => {
        setImage(diceEmpty)
        setTimeout(() => {
            let randomNum = (Math.floor(Math.random() * 6))
            setImage(diceImgs[randomNum])

        }, 1000)


    }

    return (
        <div>
            <img onClick={changeImg} className='diceSize' src={image} alt="" />
        </div>
    )

}

export default Dice