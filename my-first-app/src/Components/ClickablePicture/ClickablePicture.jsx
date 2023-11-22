import { useState } from 'react'

import img from '../../assets/gafas.png'
import imgClicked from '../../assets/gafas-gafas.png'

const ClickablePicture = () => {


    const [glass, setGlass] = useState(true)

    const putGlasses = () => {
        setGlass(!glass)
    }

    return (
        <div onClick={putGlasses}>
            <img src={glass ? img : imgClicked} alt="pictureGlasses" />

        </div>
    )

}
export default ClickablePicture