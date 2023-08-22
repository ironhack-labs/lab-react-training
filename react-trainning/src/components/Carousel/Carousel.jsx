import { useState } from 'react'
import Picture1 from './../../../public/img/dog1.jpeg'
import Picture2 from './../../../public/img/dog2.png'
import Picture3 from './../../../public/img/dog3.jpeg'

const Carousel = () => {

    const pictures = [Picture1, Picture2, Picture3]

    let i = 0

    const [currentPicture, setCurrentPicture] = useState(Picture1)

    const swipeLeft = () => {
        i = (i - 1 + pictures.length) % pictures.length
        setCurrentPicture(pictures[i])
    }

    const swipeRight = () => {
        i = (i + 1) % pictures.length
        setCurrentPicture(pictures[i])
    }

    return (

        <>

            <div>
                <button onClick={swipeLeft}> Left </button>
                <button onClick={swipeRight}> Right </button>
                <br></br>
                <br></br>
                <img src={currentPicture} alt="picture" style={{ width: '50%', height: '50%' }} />


            </div>

        </>

    )
}

export default Carousel