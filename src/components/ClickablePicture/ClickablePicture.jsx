import { useState } from 'react'

function ClickablePicture({ img, imgClicked }) {

    const [hasGlasses, setHasGlasses] = useState(true)

    const changePicture = () => {
        setHasGlasses(!hasGlasses)
    }

    return (
        <div onClick={changePicture}>
            <img src={hasGlasses ? img : imgClicked} alt="picture" />
        </div>
    )
}

export default ClickablePicture


