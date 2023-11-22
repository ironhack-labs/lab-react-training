import { useState } from "react"

const Carousel = ({images}) => {

    const [ image, setImage ] = useState(0)

    const LeftImg = () => {
       setImage( image == 0 ? images.length -1 : (image -1))
    }
    
    const RightImg = () => {
       // setImage(image == images.length -1 ? 0 : (image +1))
       if(image==images.length-1){
        setImage(0)
       }else{
        setImage(image+1)
       }
    }

    return(
        <div>
            <img src={images[image]} alt="" />
            <button onClick={LeftImg}>Left</button>
            <button onClick={RightImg}>Right</button>
        </div>
    )
}

export default Carousel