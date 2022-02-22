
import { useState } from "react"



const Carousel = ({images}) => {  
  const [img, setImg] = useState(images[0])
  const changeImg = (side) => {
    let index = images.indexOf(img)
    if (side=='rght'){
      if (index == images.length-1){
        setImg(images[0])
      }else{
        setImg(images[index+1])
      }
    }else{
      if (index == 0) {
      setImg(images[images.length-1])
      }else{
        setImg(images[index - 1])
      }
    }
  }

    return(
      <article className="carousel">
          <img src={img}/>
          <button onClick={()=>changeImg('lft')}>Left</button>
          <button onClick={()=>changeImg('rght')}>Right</button>
        </article>

    )
    
}

export default Carousel
