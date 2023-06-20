import { useState } from "react"


export default function Carousel({images}) {
    const [ index , updateIndex] = useState(0);
    const change = (increment) => updateIndex((index + images.length + increment) % images.length);

    return (
        <div className="carousel">
            <button onClick={() => change(-1)}>Previous</button>
            <img src={images[index]} alt={images[index]} />
            <button onClick={() => change(1)}>Next</button>
        </div>
    )
}