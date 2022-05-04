import { useState } from 'react'
import dice1 from '.././assets/images/dice1.png'
import dice2 from '.././assets/images/dice2.png'
import dice3 from '.././assets/images/dice3.png'
import dice4 from '.././assets/images/dice5.png'
import dice5 from '.././assets/images/dice5.png'
import dice6 from '.././assets/images/dice6.png'

const Dice = () => {
    const imagearray = [dice1, dice2, dice3, dice4, dice5, dice6]
    const [image, setImg] = useState(dice1)
    const random = Math.floor(Math.random() * (6 - 1)) + 1;
    let result = imagearray[random]

    return (<div>
        <img src={image} onClick={() => setImg(result)}></img>
    </div>)
}

export default Dice