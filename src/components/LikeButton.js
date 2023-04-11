import { useState } from "react"

function LikeButton(props) {
    const colors  = ['purple','blue','green','yellow','orange','red']

    const [like, setLike] = useState(0)

   const randomColor = colors[Math.floor(Math.random() * colors.length)]

   console.log(randomColor)

    const handleClick = () => {
        setLike(like + 1)
        }
    

    return (
        <div>
            <button style={{backgroundColor: like ? randomColor: "white" }} onClick={handleClick} >{like} Likes</button>
        </div>
    )
}

export default LikeButton