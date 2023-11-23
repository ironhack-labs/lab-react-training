import { useState } from 'react'

function ClickablePicture({ img, imgClicked }) {
    const [picture, setPicture] = useState(false)


    const changePic = () => {
        setPicture(!picture)
    }

    return (
        <img onClick={changePic} src={picture ? img : imgClicked} alt="" />
    )

}
export default ClickablePicture



