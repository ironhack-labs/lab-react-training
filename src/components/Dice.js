import '../style/Dice.css'
import React, {useState} from 'react';

function Dice
(props) {
    const [toggle, setToggle] = useState(true)
    function changeDice(){
        setToggle(!toggle)
        setTimeout(()=>{
            setToggle(!toggle)
            console.log("setTimeOut")
        },1000)
    }
    
    return(
        <div>
            <span>
                {toggle ? <img onClick={changeDice} src={props.img1} alt=""/> : <img onClick={changeDice} src={props.img2} alt=""/>}
                {/* {toggle ? <img onClick={changeDice} src={props.img1} alt=""/> : <img onClick={changeDice} src={props.img2} alt=""/>} */}
            </span>
        </div>
    )
}

export default Dice;