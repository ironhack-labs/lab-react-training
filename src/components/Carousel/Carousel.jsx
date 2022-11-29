import { useState } from 'react'


function Carousel(props) {
    const images = props.images
    const [indexCarousel, setIndexCarousel] = useState(0)
    const leftCounter = () => {
        console.log(indexCarousel)
        if (indexCarousel >= images.length - 1) {
            setIndexCarousel(0)
        }
        else {

            setIndexCarousel(indexCarousel + 1)
        }

    }
    const rightCounter = () => {
        setIndexCarousel(indexCarousel - 1)
    }






    return <div >
        <button onClick={leftCounter}>left </button>
        <img className="car" src={images[indexCarousel]} alt="picture" />
        <button onClick={rightCounter}>right</button>

    </div>



}

export default Carousel



//

//     