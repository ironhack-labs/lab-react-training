import { useState } from "react"

const LikeButton = () => {

    const [currentValue, setValue] = useState(0)
    const [counter, setCounter] = useState(0)
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    const divStyle = {
        backgroundColor: colors[counter],
        margin: '20px'
    }

    const changeButton = () => {

        setValue(currentValue + 1)
        setCounter(counter < 5 ? counter + 1 : 0)
    }



    return (
        <div>
            <button onClick={changeButton} style={divStyle}>{currentValue} Likes</button>

        </div>
    )
}

export default LikeButton