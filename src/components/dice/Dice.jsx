import { useState } from 'react';




function Dice({ images = [
    'src/assets/images/dice-empty.png',
    'src/assets/images/dice1.png',
    'src/assets/images/dice2.png',
    'src/assets/images/dice3.png',
    'src/assets/images/dice4.png',
    'src/assets/images/dice5.png',
    'src/assets/images/dice6.png'
    ] }) {

    const [image, setImage] = useState(images[0]);

    const toggle = () => {
        setImage(images[0])
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * images.length);
            setImage(images[randomIndex]);
         }, 1000);
    }

  return (
    <img className="img" onClick={toggle} src={image}/>
  )
}

export default Dice;