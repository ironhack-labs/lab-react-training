import { useState } from "react"

function Carousel({images}){

    const [currentIndex,setCurrentIndex]= useState(0)

    const sliderStyles={
        height:'100%',
        position:'relative',
    }


    const slideStyles={
        width:"100%",
        height:"100%",
        borderRadius:'10px',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundImage:`url(${images[currentIndex].url})`

    }

    const leftArrowStyles={
        position:'absolute',
        top:'50%',
        transform:'translate(0, -50%)',
        left:'32px',
        fontSize:'45px',
        color:'#fff',
        zIndex:1,
        cursor:'pointer'
    }

    const rigthArrowStyles={
        position:'absolute',
        top:'50%',
        transform:'translate(0, -50%)',
        right:'32px',
        fontSize:'45px',
        color:'#fff',
        zIndex:1,
        cursor:'pointer'
    }

    const dotsContainerStyles={
        display:'flex',
        justifyContent:'center'
    }
    const dotStyles={
        margin:'0 3px',
        cursor:'pointer',
       

    }

    const goToPrevious =()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex)
    }

    const goToNext =()=>{
        const isLastSlide = currentIndex === images.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToImage=(currentIndex)=>{
        setCurrentIndex(currentIndex)
    }

    return(
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>⪻</div>
            <div style={rigthArrowStyles} onClick={goToNext}>⪼</div>

            <div style={slideStyles}></div>
            <div style={dotsContainerStyles}>
                {images.map((image,imageIndex)=>(
                    <div key={imageIndex} style={dotStyles} onClick={()=> goToImage(imageIndex)}> ⚫ </div>
                ))}
            </div>

        </div>


    )


}

export default Carousel