import './Dice.css'
import { useState } from 'react/cjs/react.production.min'


const Dice = ({ dice1, dice2, dice3, dice4, dice5, dice6 }) => {
    const [dice, setImage] = useState(dice1)
    
        <div className='dice' onClick={() => setImage(dice2)}>
            <img src={dice} alt='hola' />
        </div>
    )
}

export default Dice