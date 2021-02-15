import React from 'react';

function LikeButton() {

    const randomBgColor = () => {
        let randomRedNum = Math.round(Math.random()*255)
        console.log(randomRedNum)
        let red = randomRedNum;
        let green = 120;
        let blue = 120;
        return (red, green, blue)
    }

    const style= {
        padding: '15px',
        backgroundColor: `rgb(${randomBgColor})`,
        color: 'white'
    }

    //let initialState = {num: 0, color: 'rgb(105,105,105)'} crear estado inicial para cambiar también color

    const [addLikes, setAddLikes] = React.useState(0)
    console.log("addlikes", addLikes)
    const handleClick = () => {
        setAddLikes((addLikes) => addLikes += 1)
    }

    return (
        <div>
            <button style={style} onClick={handleClick}>{addLikes} Likes</button>
        </div>
    )
}

export default LikeButton;
