import React, {useState} from 'react'

export default function Dice() {

    const diceImages = [
    '/img/dice1.png', 
    '/img/dice2.png', 
    '/img/dice3.png', 
    '/img/dice4.png', 
    '/img/dice5.png', 
    '/img/dice6.png']

    const randomImage = diceImages[Math.floor(Math.random() * diceImages.length)]
    
    const [image, setImage] = useState(randomImage)
    
    function clickImg()  {
        setImage('/img/dice-empty.png')
        setTimeout(() => {setImage(randomImage)
        }, 1000)
        

    }
    return (
        <div>
            <img onClick={() => clickImg()} width="120" src={image} />
        </div>
    )
}
