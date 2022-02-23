import React from 'react'
import { useState } from 'react'

function Dice() {
    const [changeDice, setChangeDice] = useState('./assets/images/dice3.png')

    const randomNumber = Math.floor(Math.random() * 6)
    const toggleChangeDice = () => {

        setChangeDice('./assets/images/dice-empty.png')
        setInterval(() => {
            setChangeDice(`./assets/images/dice${randomNumber}.png`)

        }, 1000)


    }
    return (
        <article>
            {/* <img src={changeDice} /> */}

            {changeDice ? <img src={changeDice} onClick={toggleChangeDice} /> : <img src={setChangeDice} onClick={toggleChangeDice} />}
        </article>

    )
}

export default Dice