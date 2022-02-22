import { useState } from "react";

function Carousel () {

    const images = [
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
      ]

      const [image, setImage] = useState(0)
      
      const clickPrev = () => { 
          setImage(image => image > 0 ? image - 1 : image = images.length -1 )
        }
      const clickNext = () => {
        setImage(image => image < images.length - 1 ? image + 1 : image = 0)
        }
    
        return (
           <div>
            <img src={images[image]} />
            <button onClick={clickPrev}> Anterior </button>
            <button onClick={clickNext}> Siguiente </button>
            
            </div>

        )
}

export default Carousel