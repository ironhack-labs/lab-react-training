import { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0)
    const [count, setCount] = useState(0)
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    const styles = {
        backgroundColor: colors[count],
        height: '50px',
        width: '100px',
        marginLeft: '10px',
        fontSize: '20px'

    }
    const addLikes = () => {
        count === colors.length - 1 ? setCount(0) : setCount(count + 1)
        setLikes(likes + 1)
    }
    return (
        <button style={styles} onClick={addLikes}>{likes} Likes</button>
    );
}

export default LikeButton;
