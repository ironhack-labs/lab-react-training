import { useState } from "react"

const Carousel = ({images}) => {
    const [picture, setPicture] = useState(0)
    const len = images.length
    const updatePicture = (next) => {
        if(picture === len -1 && next > 0  ){
                setPicture(0)
        
        }
            else if (  picture === 0  && next < 0){
            setPicture(len -1)
        }
        else {
            setPicture(picture + next)
        }
            
    }


    return (
        <div>
            <button onClick={() => updatePicture(-1)}>Left</button>
            <img src={images[picture]}/>
            <button onClick={() => updatePicture(1)}>Right</button>
        </div>
    )
}

export default Carousel