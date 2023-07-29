import { useState } from "react"

function ClickablePicture(props) {
  const [glasses, setGlasses] = useState(false)
  const { img, imgClicked } = props

  const handleClick = () => setGlasses(!glasses)

  return (
    <div className="ClickablePicture" onClick={handleClick} style={{border: '1px solid black'}}>
      <img src={glasses ? imgClicked : img} alt="maxence" />
    </div>
  )
}

export default ClickablePicture