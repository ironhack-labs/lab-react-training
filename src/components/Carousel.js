import { useState } from "react";

function Carousel({ images }) {

    const [picIndex, setPicIndex] = useState(0)

    const index = Math.abs(picIndex % images.length);
    // index is equal to --> |0 % 4| = 0
    // index is equal to --> |-3 % 4| = 3
    // index is equal to --> |-6 % 4| = 2
    // ....
    // index is equal to --> |-11 % 4| = 3 ==> -11 = 4 * -2 -3
    //                                                       |--> the reminder = the result of -11 % 4 (the modulus operation)


    function handleLeft() {


        setPicIndex((picIndex - images.length + 1))
        // with the absolute value for the index we can conver the values that are if we click in the left
        // 0
        // -3 = 0 - 4 + 1 --> set to picIndex
        // -6 = -3 - 4 + 1 --> set to picIndex after scond click
    }


    function handleRight() {

        setPicIndex(picIndex + 1)
    }


    return (
        <div>
            <button onClick={handleLeft}>Left</button>
            <img src={images[index]} alt="im" />
            <button onClick={handleRight}>Right</button>
        </div>
    )
}

export default Carousel;