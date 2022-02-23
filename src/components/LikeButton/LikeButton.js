import { useState } from 'react' 

function LikeButton () {

    const [countValue, setCountValue] = useState(0)

    return (
        <div className="likesCounter">

            <button onClick={() => setCountValue((prevCountValue) => prevCountValue + 1)}> {countValue} Likes </button>
            
        </div>
    )

}


export default LikeButton