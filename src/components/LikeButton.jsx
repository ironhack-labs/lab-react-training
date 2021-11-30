import { useState } from 'react'

export const LikeButton = () => {
  const [like, setLike] = useState(0)

  const handleLike = () => {
    setLike(like => like + 1)
  }
  return (
    <div>
      <button onClick={handleLike}>{like} Likes</button>
    </div>
  )
}
