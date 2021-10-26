import React, {useState} from 'react'

function Carousel(props) {

    // We create a state for the counter of the array elements (the images)
    // The dispatchAction sets the counter as a number between 0 and the 

    // Edge case 1 - It doesn't go back when you are in the first photo
    const [counter, setCounter] = useState(4)

    function rightImage() {
        setCounter((counter + 1) % props.imgs.length)
    }

    function leftImage() {
        setCounter((counter - 1) % props.imgs.length)
    }

    return (
        <div>
            <img src={props.imgs[counter]} alt="" />
            <br />
            <button onClick={leftImage}>Left</button>
            <button onClick={rightImage}>Right</button>
        </div>
    )
}

export default Carousel