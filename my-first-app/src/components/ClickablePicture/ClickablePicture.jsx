import { useState } from "react"
const ClickablePicture = ({ img, imgClicked }) => {
    const [glasses, setGlasses] = useState(false)
    const handleGlasses = () => {
        setGlasses(!glasses)
    }
    return (

        <div onClick={handleGlasses}>

            <img src={glasses ? imgClicked : img} alt={glasses ? 'chico con gafas' : 'chico sin gafas'} />

        </div>
    )
}


export default ClickablePicture