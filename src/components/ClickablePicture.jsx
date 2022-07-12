import { useState } from "react"


const ClickablePicture = ({ img, imgClicked }) => {

    const [pictureOne, setPictureOne] = useState(true) //pictureOne es el valor del estado inicial


    const appearPicture = () => {

        setPictureOne(!pictureOne) //Si picture other no es picture one

    }

    return (

        <img onClick={appearPicture} src={pictureOne ? imgClicked : img} />

    )

}





export default ClickablePicture