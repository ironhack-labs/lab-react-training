import { useState } from "react";

const ClickablePicture = (props) => {
    const [glasses, setGlasses] = useState(false)
    const { img, imgClicked } = props;

    const handleClick = () => setGlasses(!glasses)

    return (
        <div className="ClickablePicture" onClick={handleClick}>
            <img src={glasses ? imgClicked : img} alt="maxence" />
        </div>
    )
}

export default ClickablePicture;