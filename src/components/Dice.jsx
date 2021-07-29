import { useState } from "react";

function Dice (props){
const [state,setState] = useState({
            interactable: true,
            displayedImg: "img/dice3.png"
})

const diceClick=()=> {
    console.log(state.interactable);
    if(state.interactable) {
        setState({interactable:false});
        setState({displayedImg:"img/dice-empty.png"})
    }
    setTimeout(() => {
        setState({interactable:true})
        const rndInt = Math.floor(Math.random() * 6) + 1;
        setState({displayedImg:`img/dice${rndInt}.png`})
    }, 1000);
}

    return (
        <div className="dice">
                <img onClick={diceClick} src={state.displayedImg} alt="dice"/>
            </div>
    )
}

export default Dice;