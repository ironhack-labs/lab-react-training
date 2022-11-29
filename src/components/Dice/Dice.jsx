import {useState} from 'react';
import './Dice.css'
import dice from './../../assets/images/dice-empty.png'
import dice3 from './../../assets/images/dice3.png'
import dice1 from './../../assets/images/dice1.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'
import dice2 from './../../assets/images/dice2.png'


const Dice =() => {
  
    const [random, setRandom] = useState(0)
    const dices = [dice,dice1, dice2, dice3, dice4, dice5, dice6] 
    
    console.log(random)

    const handlerclick = () => {
        setRandom(Math.floor(Math.random() * dices.length))
    
    }
    return (
        <div className='CaseRandom'>

            <img onClick={handlerclick} src={dices[random]} alt="pictures" ></img>
        
        </div>
          
    )

   }

export default Dice