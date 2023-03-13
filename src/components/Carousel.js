import { useState } from 'react';

function Corousel ({ images }) {

    const [image, setImage] = useState(images[0]);

    let indiceInicial = 0;

    const changeImgNext = () => {
        setImage(images[indiceInicial += 1]);
    }

    const changeImgPrev = () => {
        setImage(images[indiceInicial -= 1])
    }

    return (
        <div>
            <img src={image} alt='foto' />
            <button onClick={changeImgPrev}>Left</button> <button onClick={changeImgNext}>Rigth</button>
        </div>
    );
};

export default Corousel;