import { useState } from 'react'
import './Dice.css'
import picture from './../../assets/images/dice-empty.png'
import picture1 from './../../assets/images/dice1.png'
import picture2 from './../../assets/images/dice2.png'
import picture3 from './../../assets/images/dice3.png'
import picture4 from './../../assets/images/dice4.png'
import picture5 from './../../assets/images/dice5.png'
import picture6 from './../../assets/images/dice6.png'


const Dice = () => {

    const [diceValue, setDiceValue] = useState(picture)
   

    const throwDice = () => {
        setDiceValue(picture)
        let newDice 
        const ramdomDice = Math.ceil(Math.random()*6)
        
        switch (ramdomDice) {
            case 1:
                newDice = picture1
                break
            case 2:
                newDice = picture2
                break
            case 3:
                newDice = picture3
                break
            case 4:
                newDice = picture4
                break
            case 5:
                newDice = picture5
                break
            case 6:
                newDice = picture6
                break
            default: newDice = picture
        }
        
            
        setTimeout(() => {            
            setDiceValue(newDice)
        },1000)
    }

    return (

           <img onClick={throwDice} className='dice' src={diceValue} alt="picture" />    

        )
}

export default Dice