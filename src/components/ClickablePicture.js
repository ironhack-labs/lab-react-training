import { useState } from "react";

function ClickablePicture (props){
    const [imagem, setImage] = useState(false)

    function cliqueImage(){
        setImage(!imagem) 
        
        //notas.push(<StarIcon />) :notas.push(<StarBorderIcon />
    }

return (
    <div>
      <img src={imagem === false ? props.semOculos : props.comOculos} onClick={cliqueImage} alt='imagem do mancebo'/>             
    </div>
);

};

export default ClickablePicture;