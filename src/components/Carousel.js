import React, { useState } from 'react';

const Carousel = (props) => {
    const [image,setImage] = useState(props.images[0]);

    const allImages = props.images
  
    const handleLeft = () => {
        setImage(allImages[allImages.indexOf(image) - 1 >= 0 ?
            allImages.indexOf(image) - 1 :
            allImages.length - 1
        ])
    }

    const handleRight = () => {
        setImage(allImages[allImages.indexOf(image) + 1 < allImages.length ?
            allImages.indexOf(image) + 1 :
            0
        ])
    }

  return (
    <div style={{marginLeft: 20}}>
        <button onClick={handleLeft} style={{margin: 10}}>Left</button>
        <img src={image} alt={image} />
        <button onClick={handleRight} style={{margin: 10}}>Right</button>
    </div>
  )
}

export default Carousel;