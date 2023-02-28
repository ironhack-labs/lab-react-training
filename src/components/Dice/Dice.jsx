import './Dice.css'
import { useState } from 'react'
import image from '../../assets/images/dice-empty.png'
import image1 from '../../assets/images/dice1.png'
import image2 from '../../assets/images/dice2.png'
import image3 from '../../assets/images/dice3.png'
import image4 from '../../assets/images/dice4.png'
import image5 from '../../assets/images/dice5.png'
import image6 from '../../assets/images/dice6.png'


const Dice = () => {
    // const random = images[Math.floor(Math.random() * images.length)]
    const images = [image1, image2, image3, image4, image5, image6]
    const [currentImage, setCurrentImage] = useState(image)

    const randomIm = () => {
        const randomImage = images[Math.floor(Math.random() * images.length)]

        setCurrentImage(randomImage)
        // setCurrentImage(currentImage)

    }

    return (
        <div className="Dice">
            <img src={currentImage} alt="" onClick={randomIm} />
        </div>
    )
}

export default Dice