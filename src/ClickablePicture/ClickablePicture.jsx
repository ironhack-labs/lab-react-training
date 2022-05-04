import './ClickablePicture.css'
import { useState } from 'react'

function ClickablePicture({ img, imgClicked }) {

    const [toggled, setToogled] = useState(true)

    return (
        <img src={toggled ? img : imgClicked} onClick={() => setToogled(prevToggled => !prevToggled)}></img>
    )
}

export default ClickablePicture