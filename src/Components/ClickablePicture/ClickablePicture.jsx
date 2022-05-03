import { useState } from 'react'

const ClickablePicture = ({img, imgClicked}) => {


    const [showPicture, setShowPicture] = useState(true)


    const togglePicture = () => setShowPicture(!showPicture)

    return (

        <button onClick={togglePicture}><img src={showPicture ? img : imgClicked}></img> </button>
    )

}

export default ClickablePicture