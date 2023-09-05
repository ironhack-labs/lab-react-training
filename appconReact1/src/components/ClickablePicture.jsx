import { useState } from "react"
import firstImg from '../assets/Maxence.png'
import secondImg from './../assets/Maxence-glasses.png'

const ClickablePicture = () => {

    const [changeImg, setChangeImg] = useState(false)

    const handleImg = () => {

        setChangeImg(!changeImg)
    }

    return (
        <div className="ChangeImg " onClick={handleImg}>
            <img src={changeImg ? firstImg : secondImg} alt="changeImg" />

        </div>
    )
}

export default ClickablePicture