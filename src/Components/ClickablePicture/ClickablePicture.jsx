import { useState } from "react";
import './../ClickablePicture/ClickablePicture.css'
import active from './public/maxence.png'
import inactive from './public/maxence-glasses.png'


const [active, setActive] = useState(false)



function ToggleImages() {
    return (
        <div className="toggle-wrapper">
            <img className="active" src={active} />
            <img className="inactive" src={inactive} />
        </div>
    )
}

export default ToggleImages