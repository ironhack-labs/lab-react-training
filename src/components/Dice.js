import { useState } from "react";

function Dice(props){
    const [dados, setDados] = useState(props.semLado)
    const opcoesResultado = [props.umLado, props.doisLados, props.tresLados, props.quatroLados, props.cincoLados, props.seisLados]
    let dadoEscolhido = Math.floor(Math.random()*opcoesResultado.length)
    const carregando = props.semLado
    
    function rolarDados(){
        setDados(carregando)
        setTimeout(() => {
            setDados(opcoesResultado[dadoEscolhido])
        }, 1000);


    }

return (
    <div>
      <img src={dados} onClick={rolarDados} alt='imagem de um dos lados do dado'/>         
    </div>
);
//onde usar o delay do sem lado dos dados?    
}

export default Dice;