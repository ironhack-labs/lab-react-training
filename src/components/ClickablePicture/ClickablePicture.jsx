import { useState } from "react"

function ClickablePicture({ img, imgClicked }) {
    const [glasses, setGlasses] = useState(false)

    const changeGlasses = () => {
        setGlasses(!glasses)
    }

    return (
        <img onClick={changeGlasses} src={glasses ? img : imgClicked} alt="maxence" />
    )
}

export default ClickablePicture