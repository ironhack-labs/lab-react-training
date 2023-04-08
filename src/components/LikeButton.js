import { useState } from 'react'

export default function LikeButton(){

  const [likes, setLikes] = useState(0)
  const [color, setColor] = useState('purple')

  const colors = ['purple','blue','green','yellow','orange','red']

  const addLikes = () => {
    setLikes(previousLikes => previousLikes + 1)

    colors.forEach((arrayColor, index) => {
        if (color == arrayColor)
        {
            if ( index == colors.length - 1)
            {
                // We're at the end of the array
                setColor( colors[0] )
            }
            else
            {
                // Anywhere else in the array
                setColor( colors[index + 1])
            }
        }
    })
  }



return (
    <div className="button">
        <button style={{ backgroundColor: color}} onClick={addLikes}> {likes} {likes == 1 ? <>Like</> : <>Likes</>} </button>
    </div>
)

}