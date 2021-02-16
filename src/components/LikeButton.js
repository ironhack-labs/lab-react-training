import React from 'react';

function LikeButton() {
    const color = ['purple','blue','green','yellow','orange','red'];

    const [numberLikes, setLikes] = React.useState(0);
    const [bgColor, setBgColor] = React.useState(0);

    const style = {
        backgroundColor: color[bgColor],
    };

    const handleClick = () => {
        let color = bgColor + 1;
        let likes = numberLikes + 1;

        if(color > 5) color = 0;

        setLikes(likes);
        setBgColor(color);
    };

    return (
        <button type = "button" style = {style} onClick={handleClick}>
            {`${numberLikes}`} Likes
        </button>
    );
}

export default LikeButton;