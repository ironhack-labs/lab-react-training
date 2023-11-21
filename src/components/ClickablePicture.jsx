
import { useState } from 'react'


function ClickablePicture({ img, imgClicked }) {
    let [click, setClick] = useState(false)

    function clickHandle() {
        setClick(!click)

    }
    return (
        <button onClick={() => clickHandle()}><img width="200px" height="200px" src={click ? img : imgClicked} alt="holi" /></button>
    )

}
export default ClickablePicture