import { useState } from 'react'

const Dice = () => {

    const [Value, setvalue] = useState()

    const randomValue = Math.floor(Math.random() * (6 - 1)) + 1

    const diceChanges = () => setvalue(randomValue)

    return (

        <div>
            <img onClick={diceChanges} src={ }></img>
        </div>
    )

}

export default Dice