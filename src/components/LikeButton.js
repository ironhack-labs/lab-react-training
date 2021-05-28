import React, {useState} from 'react'

export default function LikeButton() {
    const [sumar, setSumar] = useState(0)
    return (
        <button className="btnLike App" onClick={()=>setSumar(sumar+1)}>
            {sumar} Likes
        </button>
    )
}
