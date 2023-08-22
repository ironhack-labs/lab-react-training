import { useState } from 'react'
import GlassesOn from './../../../public/img/maxence-glasses.png'
import GlassesOff from './../../../public/img/maxence.png'

const ClickablePicture = () => {

    const [glasses, setGlasses] = useState(false)

    const handleGlasses = () => {
        setGlasses(!glasses)
    }

    return (

        <>

            <div onClick={handleGlasses} >
                <img src={glasses ? GlassesOn : GlassesOff} alt="person with glasses / no glasses" style={{ width: '25%', height: '25%' }} />
            </div>

        </>

    )
}

export default ClickablePicture