import './ClickablePicture.css'
import { useState } from 'react'

const ClickablePicture = props => {

  const { img, imgClicked } = props

  const [counterValue, setCounterValue] = useState(true)

  const upDateState = () => {
    if (counterValue === true) {
      setCounterValue(false)
    }
    else { setCounterValue(true) }


  }

  return (

    <img onClick={upDateState} src={counterValue ? img : imgClicked} alt="" />





  )
}

export default ClickablePicture