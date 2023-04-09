import { useState } from "react";

function Carousel(props) {

    const { images, num } = props

    const [img, setImg] = useState(images[0])
    const [numb, setNumb] = useState(parseFloat(num))


    function changeImage(newNum) {

        for (let i = 0; i < images.length; i++) {
            if (newNum % images.length === i && newNum >= 0) {
                setImg(images[i])
            }
            else if (newNum % images.length === -i && newNum % images.length < 0) {
                setImg(images[images.length - i])
            }
            else if (newNum % images.length === -i && newNum % images.length === -0) {
                setImg(images[0])

            }
        }
    }

    function clickForward(number) {

        let newNum = number + 1
        setNumb(newNum)

        changeImage(newNum)

    }

    function clickBackward(number) {

        let newNum = number - 1
        setNumb(newNum)

        changeImage(newNum)

    }

    return (

        <div>
            <div><button className="btn btn-success btn-lg" onClick={(() => { clickBackward(numb) })}>Back</button></div><br></br>
            <div><img style={{width:400, height:400}} id='carImg' src={img} /></div><br></br>
            <div><button className="btn btn-success btn-lg" onClick={(() => { clickForward(numb) })}>Forward</button></div>
        </div>

    )
}

export default Carousel;