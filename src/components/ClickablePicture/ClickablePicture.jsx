import { useState } from 'react'

import withoutGlasses from '../../../public/maxence.png'
import withGlasses from '../../../public/maxence-glasses.png'


const ClickablePicture = () => {

    const [glasses, setGlasses] = useState(false)

    const handleGlasses = () => {
    setGlasses(!glasses)
    }

    return (
        <div className='putYourGlasses' onClick={handleGlasses}>
            <img src={glasses ? withGlasses : withoutGlasses} alt="" />
        </div>
    )

}


export default ClickablePicture