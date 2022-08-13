import {useState} from 'react'

const Carousel = ({images}) => {
  let [index, setIndex] = useState(0)

  const rightButton = () => {
    if(index < 3){return  images[setIndex(index + 1)]} 
    else {return images[setIndex(0)]}
  }
  const leftButton = () => {
    if(index > 0){return images[setIndex(index -1)]} 
    else {return images[setIndex(3)]}
  }
  
  return ( 
    <div>
      <button onClick={leftButton} >Left</button>
      <img src={images[index]} alt="pics"  />
      <button onClick={rightButton} >Right</button>
    </div>
  );
}

export default Carousel;