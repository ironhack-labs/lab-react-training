import { useState } from 'react'

function LikeButton(props) {
    const [likes, setLikes] = useState(0);

    const buttonColors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [buttonColor, setButtonColor] = useState(buttonColors[0]);
    const [buttonStyle, setButtonStyle] = useState({ backgroundColor: buttonColor, padding: '10px 20px' });

    function buttonClicked(event) {
        setLikes(likes + 1);

        let indexOfCurrentColor = buttonColors.indexOf(buttonColor);

        if (indexOfCurrentColor != buttonColors.length - 1) {
            setButtonColor(buttonColors[indexOfCurrentColor + 1])
            setButtonStyle({ backgroundColor: buttonColors[indexOfCurrentColor + 1], padding: '10px 20px' })
        } else {
            setButtonColor(buttonColors[0])
            setButtonStyle({ backgroundColor: buttonColors[0], padding: '10px 20px' })
        }
    }

    return (
        <div>
            <button style={buttonStyle} onClick={buttonClicked}>{likes}&nbsp;Like</button>
        </div>
    )
}

export default LikeButton;