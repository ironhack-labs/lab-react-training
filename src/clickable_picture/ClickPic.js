import { useState } from 'react'

const ClickPic = ({ img, imgClicked }) => {


    const [withGlasses, setGlasses] = useState(img)

    const toogleImg = () => setGlasses(!withGlasses)

    return (
        <div>
            <img onClick={toogleImg} src={withGlasses ? img : imgClicked}></img>
        </div >
    )
}

export default ClickPic