import { useState } from "react"
import './Carousel.css'
import leftArrow from '../../assets/images/arrow-left.png'
import rightArrow from '../../assets/images/arrowRight.png'


function Carousel(props){
    const {carouselImages} = props
    const [imageCount, setImageCount] = useState(0)
    const imageToDisplay = carouselImages[0][imageCount]
    const imagesArrayLength = carouselImages[0].length

    const nextImage = () =>{
        if (imageCount<imagesArrayLength-1){
        setImageCount(imageCount+1)
    } else if (imageCount>=imagesArrayLength-1){
        setImageCount(0)
    }
    }
    const previousImage=()=>{
        if (imageCount>0){
            setImageCount(imageCount-1)
        } else if (imageCount===0){
            setImageCount(imagesArrayLength-1)
        } 
        
    }

    return( 
        <div className="carousel">
        
       
       <img className=" centered center" src={imageToDisplay}/>
       <div>
       <button className="button-spec margin-r" onClick={()=>previousImage()}><img className="min" src={leftArrow}/>  </button>
       <button className="button-spec" onClick={()=>nextImage()}><img className="min" src={rightArrow}/> </button>
       </div>
        </div>
    )
}

export default Carousel