import React, {useState} from 'react'

const Carousel = ({imgs}) => {
    const [image, setImage] = useState(imgs[0])

    function prev() {
        const curr = imgs.indexOf(image)
        if (curr == 0) {
            setImage(imgs[imgs.length - 1])
        } else {
        setImage(imgs[curr - 1])
    }
    }

    function next() {
        const curr = imgs.indexOf(image)
        if (curr == imgs.length - 1) {
            setImage(imgs[0])
        } else {
        setImage(imgs[curr + 1])
    }
    }

    return (
        <div>
            <img src={image} alt='' />
            <button onClick={prev}>Previous</button>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default Carousel
