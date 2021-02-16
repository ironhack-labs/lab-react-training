import React from 'react';

function Carousel({imgs}) {

    let initialImage = 1
    const [image, setImage] = React.useState(imgs[initialImage])

    const handleClick = () => {
        //Falta decirle que si button right +1, button left -1
        setImage(imgs[initialImage +=1])
    }

    return <div>
        <h1>Carousel</h1>
        <img src={image} alt="carousel" />

        <div>
            <button onClick={handleClick}>Left</button>
            <button onClick={handleClick}>Right</button>
            <p>{}</p>
        </div>
    </div>
}

export default Carousel;