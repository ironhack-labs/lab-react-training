import { useState } from "react"

function ClickablePicture({ img, imgClicked }) {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <img onClick={handleToggle} src={toggle ? img : imgClicked} />
        </div>
    )
}

export default ClickablePicture
