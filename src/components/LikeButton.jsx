import { useState } from 'react'

export const LikeButton = () => {
  const [like, setLike] = useState(0)
  const colors = ['purple','blue','green','yellow','orange','red']
  const [backgroundColor, setBackgroundColor] = useState(colors[0])

  const handleLike = () => {
    setLike(like => like + 1)
    const index = colors.indexOf(backgroundColor)
    setBackgroundColor(backgroundColor => {
      if (backgroundColor === 'red') {
        backgroundColor = colors[0]
      }
      if (backgroundColor === colors[index]) {
        backgroundColor = colors[index + 1]
      }
      return backgroundColor
    })
  }
  return (
    <div>
      <button style={{backgroundColor: `${backgroundColor}`}} onClick={handleLike}>{like} Likes</button>
    </div>
  )
}
