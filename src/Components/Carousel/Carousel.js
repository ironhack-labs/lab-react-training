import { useState } from "react";
import "./Carousel.css";

function Carousel(props) {

    const { images } = props;

    const [index, setIndex] = useState(0);

    function handleLeftClick() {
        if (index === 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(index - 1)
        }
    }

    function handleRightClick() {
        if (index === images.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1);
        }
    }



    return (
        <div>
            <div>
                <img className="imgs" src={images[index]} alt="image" />
            </div>
            <div className="buttons-div">
                <button className="button-left" onClick={handleLeftClick}> {"<"}</button>
                <button className="button-rigth" onClick={handleRightClick}> {">"} </button>
            </div>
        </div>
    );
}

export default Carousel;
