import { useState } from "react"


function LikeButton() {

    const [countValue, setCountValue] = useState(0)

    return (

        <article>

            <button onClick={() => setCountValue((prevCount) => prevCount + 1)}> Likes {countValue} </button>
            

        </article>
    )
}


export default LikeButton