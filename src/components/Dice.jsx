import { useState } from 'react'
import empty from './../assets/images/dice-empty.png'
import one from './../assets/images/dice1.png'
import two from './../assets/images/dice2.png'
import three from './../assets/images/dice3.png'
import four from './../assets/images/dice4.png'
import five from './../assets/images/dice5.png'
import six from './../assets/images/dice6.png'

const Dice = () => {

    const [num, setNum] = useState( Math.floor(Math.random() * ( 7 - 1 ) + 1));
    const dice = [empty, one, two, three, four, five, six]

    const handleImg = () => {
        setNum(0);
        const randomNum = Math.floor(Math.random() * ( 7 - 1 ) + 1)
        setTimeout(() => {setNum(randomNum)}, 1000);
    }
    return(
        <div>
            <img className="dice-img" src={dice[num]} onClick={handleImg} alt=''/>
        </div>
    )
}

export default Dice;