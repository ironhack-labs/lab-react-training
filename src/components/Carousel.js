import { useState } from "react";

function Carousel(props) {
    const [photo, setPhoto] = useState(0);

    function left() {
        setPhoto((photo - 1) % props.photos.length); // reprise idée d'Allan dans le lab IronNutrition (le modulo permet de boucler l'array)
    };

    function right() {
        setPhoto((photo + 1) % props.photos.length); // idem et plus simple que mon carousel du projet 2
    };

    return (
        <div>
            <div onClick={left}>&larr;</div>
            <div>
                <img src={props.photos[photo]} alt="carousel" />
            </div>
            <div onClick={right}>&rarr;</div>
        </div>
    );
};

export default Carousel;