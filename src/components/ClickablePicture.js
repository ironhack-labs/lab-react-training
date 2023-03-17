import dia from '../assets/images/dia.jpg';
import noite from '../assets/images/noite.png';
import { useState } from "react";
function ClickablePicture(){
    
    const [altImage, setAltImage] = useState(dia);

    const alterar = () =>{
        if(altImage === dia){
            setAltImage(noite)
        }
        else{
            setAltImage(dia)
        }    
    }
    return (
        <div>
            <img src={altImage} alt='dia' onClick={alterar}/>
        </div>
    )
}

export default ClickablePicture