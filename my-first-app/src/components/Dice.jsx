import { useState } from "react"
import empty from './../assets/images/dice-empty.png'
import one from './../assets/images/dice1.png'
import two from './../assets/images/dice2.png'
import three from './../assets/images/dice3.png'
import four from './../assets/images/dice4.png'
import five from './../assets/images/dice5.png'
import six from './../assets/images/dice6.png'

const Dice = () => {

    const options = [empty, one, two, three, four, five, six]

    const [dice, setDice] = useState(0)


    const throwDice = () => {
        const numRandom = Math.floor(Math.random() * (options.length - 1) + 1)

        setDice(numRandom)
    }

    return (
        <div className="Dice" onClick={throwDice}>
            <img src={options[dice]} alt="" />
        </div>
    )

}

export default Dice