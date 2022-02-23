import { useState } from "react";

function Carousel({ images }) {

    const [actualImage, setImage] = useState(images[0])

    return (
        <>
            <figure>
                <img src={actualImage} />
            </figure>
            <button onClick={() => }>Siguiente Foto</button>
            <button>Foto anterior</button>
        </>
    )

    return
}

export default Carousel;

