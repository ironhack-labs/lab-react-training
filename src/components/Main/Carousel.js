import  { useState } from 'react'

export default function Carousel(props) {

    const [image,setImage] = useState(props.images[0])

    const moveRight = () => {
        let position = props.images.indexOf(image)

        if ((position + 1) > (props.images.length - 1) ){
            position = (props.images.length - 1)
        } else {
            position++
        }
        console.log(position)

        setImage(props.images[position])

    }

    const moveLeft = () => {
        let position = props.images.indexOf(image)

        if ((position - 1) < 0 ) {
            position = 0
        } else {
            position--
        }
        console.log(position)

        setImage(props.images[position])

    }

  return (
    <div>
        <img src={image} alt="" />
        <div>
            <button onClick={()=>{ moveLeft() }}>Left</button>
            <button onClick={()=>{ moveRight() }}>Right</button>
        </div>
    </div>
  )
}