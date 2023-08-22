import './ClickablePicture.css'
import maxence from './../../assets/maxence.png'
import maxenceglasess from './../../assets/maxence-glasses.png'
import { useState } from "react"


const ClikablePicture = () => {

    const [like, setLike] = useState(true)

    const handleLike = () => {
        setLike(!like)
    }
    return (

        <div onClick={handleLike}>
            <img src={like ? maxence : maxenceglasess} alt="" />
        </div>

    )
}

export default ClikablePicture