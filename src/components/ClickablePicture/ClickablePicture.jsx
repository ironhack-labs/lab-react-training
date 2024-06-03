import { useState } from "react";
import "./ClickablePicture.css"
const ClickablePicture = ({ img, imgClicked}) => {
    const [showImg, setshowImg] = useState(false)
    return (
        <div className="clickckable-picture mb-5">
            <img src={img} className="img" onClick={() => setshowImg(!showImg)}/>
            <img src={imgClicked} className="img-clicked" style={{display: showImg ? "block" : "none"}}/>
        </div>
    );
};

export default ClickablePicture;