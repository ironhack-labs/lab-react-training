import { useState, useEffect } from "react"

function Dice() {
    
    const imageStyle = {
        width: 100
    }
        const dicePics = ["/assets/images/dice1.png", "/assets/images/dice2.png", "/assets/images/dice3.png", "/assets/images/dice4.png", "/assets/images/dice5.png", "/assets/images/dice6.png"]
       

    const [dice, setDice] = useState("/assets/images/dice-empty.png")

    const randomDice = dicePics[Math.floor(Math.random() * dicePics.length)]

    const handleClick = () => {
        setDice(randomDice)
    }

    const test = useEffect(() => {
            const clickAndChange = setInterval(() => {
                setDice(randomDice)
            }, 1000)
    }, [])


    return (
        <div>
        <img style={imageStyle} onClick={handleClick} src={dice}/>
        </div>
    )
}

export default Dice