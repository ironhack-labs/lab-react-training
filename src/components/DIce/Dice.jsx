import { useState } from "react"
import empty from './../../assets/images/dice-empty.png'
import faceOne from './../../assets/images/dice1.png'
import faceTwo from './../../assets/images/dice2.png'
import faceThree from './../../assets/images/dice3.png'
import faceFour from './../../assets/images/dice4.png'
import faceFive from './../../assets/images/dice5.png'
import faceSix from './../../assets/images/dice6.png'

const Dice = () => {

    const allFaces = [empty, faceOne, faceTwo, faceThree, faceFour, faceFive, faceSix]
    const [imagesList, setImagesList] = useState(allFaces[0])
    let random = Math.floor(Math.random() * 6 + 1)

    console.log(allFaces[random])

    const randomCube = () => {


        setImagesList(allFaces[random])

    }


    return (
        <>

            <h1>HOLA QUE TAL</h1>
            <img onClick={randomCube} src={imagesList}></img>



        </>
    )
}


export default Dice