import { useState } from "react"


const Carousel = ({ Images }) => {

    const [currentImg, setCurrentImg] = useState(0)

    const goToPreviusImg = () => {

        setCurrentImg((currentImg - 1 + Images.length) % Images.length)
    }

    const goToNextImg = () => {

        setCurrentImg((currentImg + 1) % Images.length)
    }

    return (
        <>

            <button onClick={goToPreviusImg}>Left</button>
            <img src={Images[currentImg]} alt="Images" />
            <button onClick={goToNextImg}>Rigth</button>
        </>
    )

}

export default Carousel