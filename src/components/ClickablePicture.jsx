import { useState } from 'react'

const ClickablePicture = ({ img, imgClicked }) => {
    const [glasses, setGlasses] = useState(img)

    const Glasses = () => {
        if (glasses === img) {
            setGlasses(imgClicked)
        } else {
            setGlasses(img)
        }
    }

    return (
        <div>
            <button>
                <img src={glasses} alt='' onClick={() => Glasses()} style={{ "width": "300px" }}></img>
            </button>

        </div>
    )
}

export default ClickablePicture