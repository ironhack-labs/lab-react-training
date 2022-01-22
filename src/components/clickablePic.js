import { useState } from "react";

const ClickablePic = (props) => {
    // state value (can be anything), function you use to update the value
    //we start with "clicked" being true
    const [clicked, setClick] = useState(true);
    //on click, we activate setClick which changes "clicked" to the opposite, in this case "false"
    const picClick = () => setClick((clicked) => !clicked)
    return (
        <div className="clickPic">
            <img
            onClick={picClick}
            // if "clicked" is true -->first image, if false ---> second
            src={clicked ? props.img : props.imgClicked}
            alt="sunglasses or no sunglasses" />
        </div>
    )
}
export default ClickablePic