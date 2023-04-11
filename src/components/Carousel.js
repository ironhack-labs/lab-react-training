import { useState } from 'react';
function Carousel({images}){

    const [index, setIndex] = useState(0);

    if(index < 0){
        setIndex(images.length-1);
    }else if(index > images.length-1){
        setIndex(0);
    }


    return (
        <div className="carousel">
            <img src={images[index]} alt="carousel" />

            <button onClick={()=>setIndex(index=>index-1)}>Last</button>
            <button onClick={()=>setIndex(index=>index+1)}>Next</button>
        </div>
    )
}

export default Carousel;