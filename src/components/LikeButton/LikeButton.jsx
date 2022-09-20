import './LikeButton.ccs'
import { useState } from 'react'

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red', 'gray', 'pink']


const LikeButton = () => {
    // console.log(props)
    console.log();
    const [likes, setLikes] = useState(0);

    const [style, setStyle] = useState({
        backgroundColor: 'purple',
        color: 'white',
    })

    const changeColor = () => {
        setStyle({
            backgroundColor: colors[(likes + 1) % colors.length],
            color: 'white'
        })
        setLikes(likes + 1)
    }
    console.log(colors[(likes + 1) % colors.length]);

    // const updateLike = (signo) => {
    //     const newLike = likes + signo;
    //     if (newLike >= 0) setLikes(newLike);
    // }
    return (
        <>
            <button style={style} onClick={() => changeColor()}>{likes} likes</button>
        </>
    )

}



export default LikeButton;

