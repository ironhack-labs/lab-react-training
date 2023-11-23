import { useState } from 'react'

const CollorButton = () => {
    const [click, setClick] = useState(0)
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const [colorIndex, setColorIndex] = useState(0)

    const increaseClick = () => {
        const newclick = click + 1
        const newColorIndex = (colorIndex + 1) % colors.length
        setClick(newclick)
        setColorIndex(newColorIndex)
    }
    const buttonStyle = {
        backgroundColor: colors[colorIndex],
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
    }
    return (
        <button style={buttonStyle} onClick={increaseClick}>
            {`${click} Like${click !== 1 ? 's' : ''}`}
        </button>
    )
}

export default CollorButton