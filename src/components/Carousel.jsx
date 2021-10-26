import React, {useState} from 'react'

function Carousel(props) {

    // We create a state for the counter of the array elements (the images)
    // The dispatchAction sets the counter as a number between 0 and the 
    const [counter, setcounter] = useState(0)

    function rightImage(params) {
        setCounter((counter + 1) % props.imgs.length)
    }


    function leftImage(params) {
        setCounter((counter - 1) % props.imgs.length)
    }

    return (
        <div>
            <img src={props.imgs[counter]} alt="" />
            <button onClick={leftImage}>Left</button>
            <button onClick={rightImage}>Right</button>
        </div>
    )
}

export default Carousel