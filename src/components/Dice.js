import { useState } from "react"

const Dice = () => {

    const dices = ['../assets/images/dice1.png', '../assets/images/dice2.png', '../assets/images/dice3.png', '../assets/images/dice4.png', '../assets/images/dice5.png', '../assets/images/dice6.png',]

    const imgStyle = {
        width: '150px',
        cursor: 'pointer'
    }

    const [firstImage, setFirstImage] = useState(true)

    const toggleImg = () => setTimeout(() => setFirstImage(!firstImage), 1000)
    const randPos = Math.floor(Math.random() * dices.length)

    const imageBlank = <img style={imgStyle} src="../assets/images/dice-empty.png" onClick={toggleImg} />
    const randImg = <img style={imgStyle} src={`${dices[randPos]}`} onClick={toggleImg} />

    return (
        <>
            {firstImage ? imageBlank : randImg}
        </>
    )
}

export default Dice