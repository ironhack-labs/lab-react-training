import { useState } from "react"


let images =
    [
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg'
    ]

const Carousel = () => {

    const [image, setImage] = useState(images[0])

    let position = images.indexOf(image)


    const leftPicture = () => {
        // if (images) postion--
        // setImage(images[position])
        if (image === images[0]) {
            setImage(images[1])
        } if (image === images[1]) {
            setImage(images[2])
        } if (image === images[2]) {
            setImage(images[3])
        } if (image === images[3]) {
            setImage(images[0])
        }
    }

    const rigthPicture = () => {
        if (image === images[1]) {
            setImage(images[0])
        } if (image === images[2]) {
            setImage(images[1])
        } if (image === images[3]) {
            setImage(images[2])
        } if (image === images[0]) {
            setImage(images[3])
        }
    }
    return (
        <div>
            <button onClick={() => leftPicture()}>left</button>
            <img src={image} alt="" />
            <button onClick={() => rigthPicture()}>rigth</button>
        </div>
    )

}

export default Carousel
