import { useState } from "react";

function Dice(props) {
    const { img } = props
    const [diceFace, setDiceFace] = useState(img)
 
    function changeDie (){

        let randomDie = Math.floor(Math.random() * 6)+1
        setDiceFace(img)
        setTimeout(()=>{
            setDiceFace(`../assets/images/dice${randomDie}.png`)
        },1000)
    }

    return (
        <div >
            <img style={{width:300, height:300}} onClick={(()=>changeDie())} src={diceFace} />
        </div>
    )
}
export default Dice;