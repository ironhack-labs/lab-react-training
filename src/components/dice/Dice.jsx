import { useState } from "react";
import diceEmpty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

const Dice = (props) => {

    const arr = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6]

    const [image, setImage] = useState(arr[0])

    const randomNumber = Math.floor(Math.random() * arr.length)

    const change = () => {

        setImage(arr[0])
        setTimeout(() => setImage(arr[randomNumber]), 1000);

    }


    return (
        <img className="dice" onClick={change} src={image} alt="" />
    )

}

export default Dice;