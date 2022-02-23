import { useState } from "react"


function Carousel(props) {

    const { images } = { ...props }


    let [i, setI] = useState(0)
    let [imgSrc, setImgSrc] = useState(images[i])

    const next = () => {

        let j = i + 1
        if (j > 3) { j = 0 }

        setImgSrc(images[j])
        setI(j)
    }

    const previous = () => {

        let j = i - 1
        if (j < 0) { j = 3 }

        setImgSrc(images[j])
        setI(j)
    }


    return (

        <article>
            <img className="carousel" src={imgSrc} alt="profile" />
            <div>
                <button onClick={previous}>prev </button>
                <button onClick={next}>next</button>
            </div>
        </article>)
}

export default Carousel

