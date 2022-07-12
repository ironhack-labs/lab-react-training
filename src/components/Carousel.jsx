import { useState } from "react";

function Carousel({ images }) {

    const [showImage, passImage] = useState(0) //0 pk es la posición inicial del array de imágenes


    const rightImage = () => passImage(showImage + 1) //Esto lo que hace es decirle a la variable rigthImage que la passImage, la imagen futura, será la showImage, que empieza por la posición 0, + 1 para que se mueva a la derecha
    const leftImage = () => passImage(showImage - 1)

    if (showImage < 0) {
        passImage(3)
    } else if (showImage > 3) {
        passImage(0)
    }

    return (

        <div>
            <button onClick={leftImage}>left</button>
            <img src={images[showImage]} /> {/* showImage aquí es el índice */}
            <button onClick={rightImage}>right</button>
        </div>

    )

}


export default Carousel