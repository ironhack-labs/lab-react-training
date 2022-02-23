import { useState } from "react";

function Carousel({ images }) {

    const [actualImage, setImage] = useState(images[0])

    return (
        <>
            <figure>
                <img src={actualImage} />
            </figure>
            <button onClick={() => setImage(actualImage)} src={actualImage ? images[0 + 1]}>Siguiente Foto</button>
            <button>Foto anterior</button>
        </>
    )

    return
}

export default Carousel;

{/* <img onClick={() => setShowGlasses(!showGlasses)} src={showGlasses ? img : imgClicked} */ }