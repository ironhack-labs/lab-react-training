import './Dice.css'
import dice1 from './../../assets/dice1.png'
import dice2 from './../../assets/dice2.png'
import dice3 from './../../assets/dice3.png'
import dice4 from './../../assets/dice4.png'
import dice5 from './../../assets/dice5.png'
import dice6 from './../../assets/dice6.png'
import diceEmpty from './../../assets/dice-empty.png'
import getRandom from '../../utils/random'
import { useState } from 'react'

const Dice = () => {
	const dices = [dice1, dice2, dice3, dice4, dice5, dice6]

	const [diceImg, setDiceImg] = useState(dice3)

	const handleDiceRoll = () => {
		setDiceImg(diceEmpty)
		setTimeout(() => {
			setDiceImg(dices[getRandom(0, dices.length - 1)])
		}, 1000)
	}

	return (
		<div className='Dice'>
			<img onClick={handleDiceRoll} src={diceImg} alt='' />
		</div>
	)
}

export default Dice
