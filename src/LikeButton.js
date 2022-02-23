import { useState } from "react"

function LikeButton() {

    const [countLike, setCountLike] = useState(0)

    return (
        <div className="button">

            <button onClick={() => setCountLike(countLike + 1)}>
                {countLike} likes</button>


        </div>
    )

}

export default LikeButton


