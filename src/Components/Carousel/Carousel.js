import { useState } from "react";
import "./Carousel.css";

function Carousel(props) {

    const { images } = props;

    const [image, setImage] = useState(0);

    function handleLeftClick() {
        if (image === 0) {
            setImage(images.length - 1);
        } else {
            setImage(image - 1)
        }
    }

    function handleRightClick() {
        if (image === images.length - 1) {
            setImage(0)
        } else {
            setImage(image + 1);
        }
    }



    return (
        <div>
            <div>
                <img className="imgs" src={images[image]} alt="id" />
            </div>
            <div className="buttons-div">
                <button className="button-left" onClick={handleLeftClick}> {"<"}</button>
                <button className="button-rigth" onClick={handleRightClick}> {">"} </button>
            </div>
        </div>
    );
}

export default Carousel;
