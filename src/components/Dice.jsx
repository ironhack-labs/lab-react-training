import React from 'react'

const Dice = () => {
    const selectImage = ({target}) => {
        target.src = 'img/dice-empty.png'
        const timer = setTimeout(() => {
            target.src = `img/dice${Math.floor(Math.random()*6 + 1)}.png`
        }, 1000)
        return () => clearTimeout(timer)
    }
    return (
        <div className='dice'>
            <img onClick={selectImage} src="img/dice3.png" alt="dice"/>
        </div>
    )
}

export default Dice
