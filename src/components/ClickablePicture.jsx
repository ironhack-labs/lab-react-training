import { useState } from 'react'
// import './ClickablePicture.css'

const ClickablePicture = props => {

    const { img, imgClicked } = props

    const [showGlasses, setShowGlasses] = useState(false)

    const handleShowGlasses = () => setShowGlasses(!showGlasses)


    return (
        <article >
            <img onClick={handleShowGlasses} src={showGlasses ? imgClicked : img} ></img>

        </article>
    )
}

export default ClickablePicture
