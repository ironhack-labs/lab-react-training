import React from 'react'

function Carousel(props) {
    const {imgs} = props;

    const [imageIndex, setImageIndex] = React.useState(0)



    function changeImageRight(){
        setImageIndex((imageIndex===3)?0:(imageIndex + 1));
    }

    function changeImageLeft(){
        setImageIndex((imageIndex===0)?3:(imageIndex - 1));
    }

    return (
        <div>
            <button onClick={changeImageLeft}>left</button>
            <img src={imgs[imageIndex]} alt="random person"></img>
            <button onClick={changeImageRight}>right</button>
        </div>
    )
}

export default Carousel
