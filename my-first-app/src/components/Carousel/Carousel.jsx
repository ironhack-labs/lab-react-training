import { useState } from "react"


function Carousel({ images }) {


    const [currentImg, setCurrentImg] = useState(0)


    const goRigth = () => {
        const lastImage = currentImg === images.length - 1
        const newIndex = lastImage ? 0 : currentImg + 1
        setCurrentImg(newIndex)
    }

    const goLeft = () => {
        const firstImage = currentImg === 0
        const newIndex = firstImage ? images.length - 1 : currentImg
        setCurrentImg(newIndex)
    }


    return (

        < section className="Carousel" >
            <button onClick={goLeft}>left</button>
            <img src={images[currentImg]} alt="carrusel" />
            <button onClick={goRigth}>rigth</button>
        </section >
    )


}

export default Carousel