import './Dice.css'
import imgEmpty from '../../assets/images/dice-empty.png'
import { useState } from 'react'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

function Dice() {
  const [image, setImage] = useState(dice3)
  const imageAll = [dice1, dice2, dice3, dice4, dice5, dice6]

  const handleImgRandom = () => {
    setImage(imgEmpty)
    setTimeout(() => setImage(imageAll[Math.floor(Math.random() * (imageAll.length - 1)) + 1]), 1000)
  }

  return (
    <div className='dice-container'>
      <img className='dice-img' onClick={handleImgRandom} src={image} alt="" />
    </div>
  )
}

export default Dice