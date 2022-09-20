import { useState } from 'react';


const LikeButton = () => {

    const [likesA, setLikesA] = useState(0)
    const [likesB, setLikesB] = useState(0)
    
    const updateLikesA = () => {

        let addLikeA = likesA + 1   
        setLikesA(addLikeA)
    }
    const updateLikesB = () => {

        let addLikeB = likesB + 1   
        setLikesB(addLikeB)
    }    

    return (
        <>
        <button onClick={updateLikesA}>{likesA} Likes</button>
        <button onClick={updateLikesB}>{likesB} Likes</button>
        </>
    )


}

export default LikeButton