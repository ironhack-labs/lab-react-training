import React, {useState} from 'react';

function LikeButton() {
    const [like, setLike] = useState(0);
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    const incrementLikes = () => setLike(like + 1)

    return (<>
            <button style={
                {
                    "background-color": (like < colors.length) && colors[like] || setLike(0),
                    height: '2rem',
                    width: '5rem'
                }
            } onClick={incrementLikes}> {like} LIKES
            </button>
        </>
    );
}

export default LikeButton;