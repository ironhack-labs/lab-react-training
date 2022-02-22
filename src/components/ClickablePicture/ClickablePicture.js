import { useState } from "react"
import "./ClickablePicture.css"
const ClickablePicture = props => {

    const { img, imgClicked } = props
    const [initialState, setInitialState] = useState(false)

    return (

        <img src={initialState ? imgClicked : img} alt="img" onClick={() => {
            setInitialState((initialValue) => !initialValue)
        }
        } />
    )
}
export default ClickablePicture
