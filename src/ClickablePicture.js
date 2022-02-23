import { useState } from "react"

function ClickablePicture(props) {

    const { img, imgClicked } = props

    const [classInitial, setClassInitial] = useState(true)

    const [imgInitial, setImgInitial] = useState(img)



    const checkImage = () => {
        if (classInitial) {
            setImgInitial(imgClicked)
        } else {
            setImgInitial(img)
        }
    }


    return (
        <div>
            <img src={imgInitial} onClick={() => checkImage(setClassInitial(!classInitial))}>
            </img>


        </div >
    )

}



export default ClickablePicture

