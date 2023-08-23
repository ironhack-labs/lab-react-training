import './ClickablePicture.css'
import { useState } from 'react'

import nachoOn from './../../../public/download-3.jpg'
import nachoOf from './../../../public/download-4.jpg'


const ClickablePicture = () => {

    const [like, setLike] = useState(false)

    const handleLike = () => {
        setLike(!like)
    }

    return (
        <div className="LikeButton" onClick={handleLike}>
            <img src={like ? nachoOn : nachoOf} alt="" />
            {
                like ?
                    <p>Le gustas! :D</p> :
                    <p>Parece que no le gustas aw D:</p>
            }
        </div>
    )




}

export default ClickablePicture


