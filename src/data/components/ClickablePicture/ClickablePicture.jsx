import { useState } from 'react'
import './ClickablePicture.css'

const ClickablePicture = props => {
    const { img, imgClicked } = props

    const [hasGlasses, setHasGlasses] = useState()

    const handlHasGlasses = () => setHasGlasses(!hasGlasses)



    return (
        <article onClick={handlHasGlasses}>
            <img src={hasGlasses ? img : imgClicked}  ></img>

        </article>
    )


}

export default ClickablePicture