import React from 'react';
import {useState} from 'react';

const LikeButton =(props)=> {
    const [likes, setLikes] = React.useState(0);

    let colors = ['blue', 'purple', 'green', 'orange', 'red', 'yellow'];
    let pickColor = colors[Math.floor(Math.random() * 5)];
    return (
        <div>
            <button style = {{backgroundColor: pickColor, margin: 25}}
                    onClick = {() => setLikes(likes + 1)}> {likes} {likes === 1 ? 'Like' : 'Likes'} {' '}</button>
        </div>
    );
};

export default LikeButton;