import React, {useState} from 'react'

function LikeButton() {



    const [likes, setLikes] = useState(0);

    let buttonText = '1 Like'
    if (likes !== 1) {
        buttonText = `${likes} Likes`
    }

    const colors = ['purple','blue','green','yellow','orange','red']

    let buttonStyles = {
        backgroundColor: colors[likes%colors.length],
        border: 'none',
        color: 'white',
        padding: '5px',
        margin: '5px'
    }

    return (
        <button style={buttonStyles} onClick={() => setLikes(likes + 1)} >{buttonText}</button>
    )
}

export default LikeButton