import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function Carousel({images}) {
  
  let [index, setIndex] = useState(0);

  const changeImgLeft = () => {
    if(index > 0){
        index--;
        setIndex(index);
    }
    console.log({left: index})
  }

  const changeImgRight = () => {
    if(index < images.length - 1){
        index++;
        setIndex(index);
    }
    console.log({right: index})
  }

  return (
    <div className="carousel">
        <img src={images[index]} />
        <div>
            <button onClick={changeImgLeft}>Left</button>
            <button onClick={changeImgRight}>Right</button>
        </div>
    </div>
  )
}
