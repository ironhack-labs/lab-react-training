import React from 'react';

function Dice() {
    let style = {width: '80px'}

    let pictures = ['/img/dice1.png', '/img/dice2.png', '/img/dice3.png', '/img/dice4.png', '/img/dice5.png', '/img/dice6.png']

    const [dicePicture, setDicePicture] = React.useState(pictures[2])

    const handleClick = () => {
        setDicePicture((pic)=> pic='/img/dice-empty.png' )

        setTimeout(()=>{
            let randomNum = Math.round(Math.random()*pictures.length-1)
            setDicePicture((pic)=>pic = pictures[randomNum])
        }, 1000)
    }

    return <div>
        <img style={style} src={dicePicture} alt='Dice' onClick={handleClick} />
    </div>
}

export default Dice;