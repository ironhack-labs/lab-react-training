import React, {useState} from 'react'

function LikeButton() {
    const [state, setState] = useState(0);

    function increment() {
        setState(state + 1);
    }

    const colors = ['purple','blue','green','yellow','orange','red'];

    const buttonStyle = {
        backgroundColor: colors[state % colors.length]
    };

    return (
        <div>
            <button onClick={increment} style={buttonStyle}> {state} Likes </button>
        </div>
    )
}

export default LikeButton
