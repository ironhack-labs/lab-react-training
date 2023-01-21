import { useState } from "react";

function LikeButton() {

    const [likes, setLikes] = useState(0)

    const colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

    // Modulus 6 since the list has length 6. Thi alows me to loop over the array over and over , because what we get is the remaining 
    let index = (likes % 6);




    let color = colorArray[index]


    function handleLikes() {
        const totalLikes = likes + 1
        setLikes(totalLikes)

    }

    return (
        <button onClick={handleLikes} style={{ backgroundColor: color, padding: "8px 35px" }} >
            <p>{likes}</p>
        </button>
    )
}


export default LikeButton;