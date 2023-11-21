import { useState } from 'react'
import './Dice.css'
import empty from '../../assets/dice-empty.png'
import numberOne from '../../assets/dice1.png'
import numberTwo from '../../assets/dice2.png'
import numberThree from '../../assets/dice3.png'
import numberFour from '../../assets/dice4.png'
import numberFive from '../../assets/dice5.png'
import numberSix from '../../assets/dice6.png'

const Dice = () => {

    const [myDice, setMyDice] = useState(numberThree)

    const handleClick = () => {
        let number = Math.floor(Math.random() * 6)
        switch (number) {
            case 1:
                setMyDice(empty)
                setTimeout(() => setMyDice(numberOne), 1000)
                break;
            case 2:
                setMyDice(empty)
                setTimeout(() => setMyDice(numberTwo), 1000)
                break;
            case 3:
                setMyDice(empty)
                setTimeout(() => setMyDice(numberThree), 1000)
                break;
            case 4:
                setMyDice(empty)
                setTimeout(() => setMyDice(numberFour), 1000)
                break;
            case 5:
                setMyDice(empty)
                setTimeout(() => setMyDice(numberFive), 1000)
                break;
            case 6:
                setMyDice(empty)
                setTimeout(() => setMyDice(numberSix), 1000)
                break;

        }
    }

    return (
        <>
            <img onClick={handleClick} src={myDice} alt="" />
        </>
    )

}

export default Dice