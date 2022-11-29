import { useState } from 'react'
import './ClickablePicture.css'

const ClickablePicture = props => {


    const { img, imgClicked } = props
    const [picture, setPicture] = useState(false)

    const changePicture = () => setPicture(!picture)

    return (
        <div className="ClickablePicture">
            <img src={!picture ? img : imgClicked} alt="" onClick={changePicture} />
        </div>
    )

}

export default ClickablePicture