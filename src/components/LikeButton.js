import React, { useState } from 'react';



function LikeButton(props) {

    const arrayOfColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const { id, num } = props

    const [color, setColor] = useState(arrayOfColors[0])
    const [Num, setNum] = useState(parseFloat(num))

    const divStyle = {
        backgroundColor: `${color}`,
        width:200,
        height:100
    };

    function changeColorAndNumber(colorsArr, btnId, number) {

        let newNumber = number + 1
        setNum(newNumber)
        let btn = document.getElementById(btnId)
        for (let i = 0; i < colorsArr.length; i++) {
            if (newNumber % 6 === i) {
                btn.style.backgroundColor = colorsArr[i]
                setColor(arrayOfColors[i])
            }
        }
        return newNumber
    }

    return (

        <div className='container mb-3'>
            
                <button id={id} style={divStyle} onClick={() => changeColorAndNumber(arrayOfColors, id, Num)}><h2>{Num}</h2></button>
  
        </div>
    )
}

export default LikeButton