import { useState } from "react";
function Carousel({ images }) {
    let x = 0
    const [count, setCount] = useState(x)

    function moveR() {
        if (count < images.length - 1) {
            setCount(count + 1)
        } else { setCount(0) }


    }
    function moveL() {
        if (count > 0) {
            setCount(count - 1)
        }
        else { setCount(images.length - 1) }
    }



    return (
        <div className="placa">
            <img width='200px' height='200px' src={images[count]} alt="" />
            <>
                <button className="butoni" onClick={() => moveL()}>IZQ </button>
                <button className="butoni" onClick={() => moveR()}>DER</button>
            </>
        </div>
    )

}


export default Carousel