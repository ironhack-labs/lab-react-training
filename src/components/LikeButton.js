import { useState } from 'react'

const LikeButton = () => {

    const [numLike1, setNumLike1] = useState(0)
    const [numLike2, setNumLike2] = useState(0)

    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const randPos1 = Math.floor(Math.random() * colors.length)
    const randPos2 = Math.floor(Math.random() * colors.length)

    const divStyle1 = {
        color: 'black',
        backgroundColor: `${colors[randPos1]}`
    }
    const divStyle2 = {
        color: 'black',
        backgroundColor: `${colors[randPos2]}`
    }

    return (
        <>
            <button className='LikeButton' style={divStyle1} onClick={() => setNumLike1(likes => likes += 1)}>{numLike1} Likes</button>
            <button className='LikeButton' style={divStyle2} onClick={() => setNumLike2(likes => likes += 1)}>{numLike2} Likes</button>
        </>
    )
}

export default LikeButton