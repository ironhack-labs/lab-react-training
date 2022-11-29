import Dice0 from './../../assets/images/dice-empty.png'
import Dice1 from './../../assets/images/dice1.png'
import Dice2 from './../../assets/images/dice2.png'
import Dice3 from './../../assets/images/dice3.png'
import Dice4 from './../../assets/images/dice4.png'
import Dice5 from './../../assets/images/dice5.png'
import Dice6 from './../../assets/images/dice6.png'

import { useState } from 'react'


const Dice = () => {

    const dicesArray = [Dice0, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

    const [random, setRandom] = useState(0)

    const handlerOnClick = () => {
        setRandom(Math.floor(Math.random() * dicesArray.length))
    }


    return (
        <img onClick={handlerOnClick} src={dicesArray[random]} className='container' />
    )


}

export default Dice


