import React, { useState } from 'react'

export default function Carousel() {

const images = ['https://randomuser.me/api/portraits/women/1.jpg',
'https://randomuser.me/api/portraits/men/1.jpg',
'https://randomuser.me/api/portraits/women/2.jpg',
'https://randomuser.me/api/portraits/men/2.jpg']

const [image, setImage] = useState(0)

const nextHandler = () => {
    setImage(image => image < images.length - 1 ? image + 1 : image = 0)
    }

const prevHandler = () => {
    setImage(image => image > 0 ? image - 1 : image = images.length -1 )
}

    return (
       <div>
        <img src={images[image]} />
        <button onClick={prevHandler}> Previous </button>
        <button onClick={nextHandler}> Next </button>
        </div>
    )
}
