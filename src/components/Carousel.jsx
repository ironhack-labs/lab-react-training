import { useState } from "react"

function Carousel({images}){

    const [carouselValue, setCarouselValue] = useState(0)

    const right = () => {
        if(carouselValue<3){
            setCarouselValue(carouselValue+1)
        } else {
            setCarouselValue(3)
        }
    }

    const left = () => {
        if(carouselValue>0){
            setCarouselValue(carouselValue-1)
        } else {
            setCarouselValue(0)
        }
    }

    return (
        <div className="Counter">
            <button onClick={() => left()}>Izquierda</button>
            <img src={images[carouselValue]} alt=""/>
            <button onClick={() => right()}>Derecha</button>
        </div>
    );
}

export default Carousel