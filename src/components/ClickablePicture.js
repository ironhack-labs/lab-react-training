import { useState } from "react";
import image1 from '../assets/images/maxence.png'
import image2 from '../assets/images/maxence-glasses.png'

export default function ClickablePicture() {

    // const [data, setData] = useState(false)
// 
    // const changeImg = () => {
    //     setData(!data)
    //     console.log(data)
    // }
    // return (
    //     <div>
    //         
    //         <img onClick={() => {changeImg()}} src={image1} alt="" />
// 
    //     </div>
    // )

    const [data,setData] = useState(image1)

    const changeImg = () => {
        setData(image2)
        console.log('este es el data', data, 'este el set', setData)

    }

    const changeImg2 = () => {
        setData(image1)
        console.log('este es el data', data, 'este el set', setData)

    }






    return (
    <>

        {
            data === image1 ?
            <img onClick={() => {changeImg()}} src={data} alt=""/>
            :
            <img onClick={() => {changeImg2()}} src={data} alt=""/>
        }


    </>
    )
}
