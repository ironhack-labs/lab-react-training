import { useState } from "react"
import dice0 from "../../assets/images/dice-empty.png"
import dice1 from "../../assets/images/dice1.png"
import dice2 from "../../assets/images/dice2.png"
import dice3 from "../../assets/images/dice3.png"
import dice4 from "../../assets/images/dice4.png"
import dice5 from "../../assets/images/dice5.png"
import dice6 from "../../assets/images/dice6.png"





function Dice() {


    let img = dice0
    const [dice, setShowDice] = useState(0)

    const handleShowDice = () => {


        setShowDice(Math.floor(Math.random() * (6 - 0) + 0))

        switch (dice) {
            case '0':
                return img = dice0
                    ;
            case '1':
                return img = dice1
                    ;
            case '2':
                return img = dice2
                    ;
            case '3':
                return img = dice3
                    ;
            case '4':
                return img = dice4
                    ;
            case '5':
                return img = dice5
                    ;
            case '6':
                return img = dice6
                    ;
        }
    }

    return (
        <img src={img} onClick={handleShowDice} width="126" height="125" />
    )
}

export default Dice