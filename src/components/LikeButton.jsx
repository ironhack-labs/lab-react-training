import { useState } from "react"
function LikeButton(){
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const [counter, setCounter] = useState(0)
    const [colorIndex, setColorIndex] = useState(0)
    const [currentColor, setCurrentColor] = useState('red')
    const addOne= () =>{ setCounter(counter + 1)}
    const changeColor = (colorIndex)=>{
        if(colorIndex === colors.length) {colorIndex = 0 }
        setColorIndex(colorIndex+1)
        let newColor = colors[colorIndex]
        console.log(colorIndex)
        setCurrentColor(newColor)
    }
    return (
        <button style={{backgroundColor: currentColor}}onClick={
            ()=>{
                addOne()
                changeColor(colorIndex)
            }
        }>Like {counter}</button>
    )

}

export default LikeButton