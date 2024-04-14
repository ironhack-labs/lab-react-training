import { useState } from "react";
import dice0 from "../../assets/images/dice-empty.png";
import dice1 from "../../assets/images/dice1.png";
import dice2 from "../../assets/images/dice2.png";
import dice3 from "../../assets/images/dice3.png";
import dice4 from "../../assets/images/dice4.png";
import dice5 from "../../assets/images/dice5.png";
import dice6 from "../../assets/images/dice6.png";








function Dice(){
    const [image, setImage] = useState(0);

    const handleClick = () => {
        const diceImages = [dice0, dice1, dice2, dice3, dice4, dice5, dice6]
        const randomNumDice = Math.floor(Math.random()* (6 - 1) + 1)
        setTimeout(() => { setImage( prevImage => diceImages[randomNumDice] )},1000)
        setImage( prevImage => diceImages[0] )
 
        console.log (randomNumDice)

    }

    
    
    return(
        <div className="box container">
        <img onClick={handleClick} role="button" className="img-thumbnail" src={image}  alt={``} />
        </div>
    )
}
export default Dice;