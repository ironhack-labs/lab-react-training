import {useState} from 'react'

function ClickablePicture ({img , imgClicked}) {

    const [picture, setPicture] = useState(true)

    function togglePicture (){
        setPicture(!picture)
    }

    return (
        <div>
            <h3>Iteration 9</h3>
            <img onClick={()=>togglePicture()} src={picture ? img: imgClicked} alt='image' width={250}/>
        </div>
    )
}
export default ClickablePicture