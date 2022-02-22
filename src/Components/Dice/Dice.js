import { useState } from 'react'
import diceEmpty from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'



function Dice() {

    const dicesArr = [dice1, dice2, dice3, dice4, dice5, dice6,]
    const [diceMove, setDiceMove] = useState(dice1)

    const random = Math.floor(Math.random() * 6) + 1
    //console.log(random)

    function getRandomDice() {
        setDiceMove(diceEmpty)
        setTimeout(() => { setDiceMove((`dice${random}`)) }, 1000)
    }


    return (
        <img style={{ width: 200 }} src={diceMove} onClick={() => getRandomDice()} >
        </img>
    )
}

export default Dice