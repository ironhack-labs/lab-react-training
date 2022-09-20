import { useState } from 'react';


function Carousel({ images }) {

    const [index, setindex] = useState(0);
    const [img, setImg] = useState(images[index]);
    let newIndex = index
    console.log("primero", index)
    console.log("primero New", newIndex)

    const nextImg = () => {
        newIndex = index + 1
        console.log(index)
        if (newIndex < 4) {
            setindex(newIndex)
        }
        else { setindex(0) }

        setImg(images[index])
    }
    const previousImg = () => {
        newIndex = (index - 1)
        console.log("prevIndex es --->", newIndex)
        if (newIndex >= (0)) {
            setindex(newIndex)
            console.log("el indice del prevI del if --->", newIndex)
            console.log("el indice del if --->", index)

        }
        else {
            setindex(3)
            console.log("el indice del else --->", index)
        }

        setImg(images[index])
        console.log(img)
    }

    return (
        <>
            <button onClick={previousImg}>Previous</button>
            <img src={img} alt="" />
            <button onClick={nextImg}>Next</button>
        </>
    )

}
export default Carousel;