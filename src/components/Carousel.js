import { useState } from "react"

function Carousel ({images}) {

    const [carouselNr, setCarouselNr] = useState(0)

    function left () {
        if(carouselNr>0) 
        setCarouselNr((oldCarouselNr)=>oldCarouselNr-1)
        else
        setCarouselNr((oldCarouselNr)=>3)
    }

    function right () {
        if(carouselNr<3) setCarouselNr((oldCarouselNr)=>oldCarouselNr+1)
        else
        setCarouselNr((oldCarouselNr)=>0)
    }

    return (
        <div>
            <h3>Iteration 11</h3>
            <button onClick={left}>Left</button>
            <img src={images[carouselNr]} alt='carousel' />
            <button onClick={right}>Right</button>
        </div>
    )
}
export default Carousel