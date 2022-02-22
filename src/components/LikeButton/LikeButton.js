import { useState } from "react"

const LikeButton = ()=>{

    let [countValue, setCountValue] = useState(0)

    return(

        <div className="Counter">
        <button onClick={() => setCountValue(countValue +=1)}> {countValue} Likes </button>
        </div>
    )
}

export default LikeButton