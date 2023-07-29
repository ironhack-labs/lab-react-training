import { useState } from 'react'

function LikeButton() {
  const [likesCount, setLikesCount] = useState(0)

  const colorPalette = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
  const [background, setBackground] = useState(colorPalette[likesCount])

  let backgroundStyle = { backgroundColor: `${background}` }
  
  const hanldeClickButton = () => {
    setLikesCount(likesCount + 1)
    setBackground(colorPalette[(likesCount + 1) % 6])
  }

  return (
    <button
      onClick={hanldeClickButton}
      style={backgroundStyle}
      className="LikeButton"
    >
      {likesCount} Likes 👍
    </button>
  );
}

export default LikeButton