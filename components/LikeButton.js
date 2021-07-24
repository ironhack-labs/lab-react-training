import React, {useState} from 'react';

function LikeButton(){
    const [likes, setLikes ] = useState(0);
    const likeColors = ['purple','blue','green','yellow','orage','red'];
    const [likeColorIndex, setLikeColorsIndex] = useState(0);

    const handleClick = () =>{
        setLikes(prevLikes => prevLikes + 1);
        setLikeColorsIndex(prevLikesColorIndex => prevLikesColorIndex + 1);
    }

    return (
        <div className="iteration-container">
            <button style={{backgroundColor: `${likeColors[likeColorIndex]}`, color:'white', width: '150px', height: '50px',}} onClick={handleClick}> likes </button>
        </div>
    )

}

export default LikeButton