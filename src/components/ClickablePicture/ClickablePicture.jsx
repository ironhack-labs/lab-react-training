import { useState } from 'react'


const ClickablePicture = ({ img, imgClicked }) => {

    const [glasses, setGlasses] = useState(false)

    const handleGlasses = () => {

        setGlasses(!glasses)
    }

    return (

        <div>
            <img src={glasses ? imgClicked : img} alt="picture" onClick={handleGlasses} />
        </div>
    )
}

export default ClickablePicture