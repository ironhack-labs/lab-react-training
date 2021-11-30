import { useState } from 'react'

export const ClickablePicture = ({ img, imgClicked }) => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(clicked => !clicked)
  }
  return (
    <div>
      {!clicked ? (
        <img src={img} onClick={handleClick} alt="guy" />
      ) : (
        <img src={imgClicked} onClick={handleClick} alt="guy" />
      )}
    </div>
  )
}
