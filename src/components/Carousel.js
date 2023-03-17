import { useState } from 'react';

function Carousel ({ images }) {
    const [image, setImage] = useState(0);
    const proximaImagem = () => {
        if(image === images.length-1){
            setImage(0) 
        }else{
            setImage(image + 1);
        }
        
    }
    const imagemAnterior = () => {
        if(image === 0){
            setImage(images.length-1) 
        }else{
            setImage(image - 1);
        }
    }

    return (
        <div>
            <img src={images[image]} alt='imagens aleatorias' />
            <button onClick={imagemAnterior}>Anterior</button> <button onClick={proximaImagem}>Proxima</button>
        </div>
    );
};
export default Carousel;