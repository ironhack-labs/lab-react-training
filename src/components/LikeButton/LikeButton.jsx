import React, { useState } from 'react'


const LikeButton = () => {
    const colores = ['blue', 'green', 'yellow', 'orange', 'red', 'purple']
    const [fondo, setFondo] = useState("purple")
    const [like, setLike] = useState(0)
    const handleButton = () => {
        setLike(like + 1)
        setFondo(colores[like % colores.length])
    }

    return (
        <div><button style={{ backgroundColor: fondo }} onClick={(handleButton)}>{like} Likes</button></div>
    )
}

export default LikeButton