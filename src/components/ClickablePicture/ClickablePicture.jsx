import { useState } from "react"


const ClickablePicture = ({ img, imgClicked }) => {


    const [glasses, setGlasses] = useState(false)


    const handleClick = () => {
        setGlasses(!glasses)
    }
    return (

        < img
            src={glasses ? imgClicked : img}
            onClick={handleClick}
        />
    )

}


export default ClickablePicture