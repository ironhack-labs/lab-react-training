import {useState} from 'react'

const Carousel = ({images}) => {
  const [picture, setPicture] = useState(images[0])

  return ( 
    <div>
      <button>Left</button>
      <img src={picture} alt="pics"  />
      <button>Right</button>
    </div>
  );
}

export default Carousel;