import { useState } from "react"
import dice0 from './../../assets/dice-empty.png'
import dice1 from './../../assets/dice1.png'
import dice2 from './../../assets/dice2.png'
import dice3 from './../../assets/dice3.png'
import dice4 from './../../assets/dice4.png'
import dice5 from './../../assets/dice5.png'
import dice6 from './../../assets/dice6.png'

const Dice = () => {

    const [random, setRandom] = useState(dice0)
    const handleRandom = () => {


        const mathRandom = Math.floor(Math.random() * 7)


        switch (mathRandom) {
            case 0:
                return setRandom(dice0)
            case 1:
                return setRandom(dice1)
            case 2:
                return setRandom(dice2)
            case 3:
                return setRandom(dice3)
            case 4:
                return setRandom(dice4)
            case 5:
                return setRandom(dice5)
            case 6:
                return setRandom(dice6)

            default:
                return setRandom(dice0)



        }


    }



    return (
        <div className="Dice" onClick={handleRandom}>
            <h1>HOLAA</h1>
            <img src={random} alt="" />

        </div>
    )
}

export default Dice