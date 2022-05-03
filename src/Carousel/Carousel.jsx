import { useState } from "react";

const Carousel = ({ images }) => {

    
    let [imgScroll, setImgScroll] = useState(0)


    return (
        <div className='Carousel'>
            <button onClick={() => {
                imgScroll - 1 === -1 ? setImgScroll(imgScroll = 3) : setImgScroll(imgScroll -= 1)
            }}>Left</button>

            <img src={images[imgScroll]} alt=''></img>

            <button onClick={() => {
                imgScroll + 1 === 4 ? setImgScroll(imgScroll = 0) : setImgScroll(imgScroll += 1)
            }}>Right</button>

        </div>
    )
    

}

export default Carousel 