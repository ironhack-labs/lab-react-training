import { useState } from "react"

function Carousel({images}) {

let [image, setImage] = useState(images[0])

const imageLeft = () =>{

    let imagePosition = 0
    if (imagePosition <= 0){
        imagePosition = imagePosition.length - 1
        setImage(image[imagePosition])
    }
}

    return(
        <div>
            <button> Left </button>
            <img src={image}/>
            <button> Right </button>
        </div>
    )
}

export default Carousel