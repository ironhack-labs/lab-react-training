import { useState } from "react"

const Dice = () => {

    const [diceFace, setDiceFace] = useState("./../../assets/images/dice-empty.png")
    let newImage = diceFace

    const setNewFace = () => {

        setDiceFace((newImage) => newImage = "./../../assets/images/dice-empty.png")

        setTimeout(() => {

            setDiceFace((newImage) => {
                return newImage = `./../../assets/images/dice${Math.round(Math.random() * (6 - 1) + 1)}.png`
            })

        }, 1000)
    }

    return (
        <img src={newImage} alt="Dado" onClick={() => setNewFace()} />
    )
}
export default Dice
