import React, {useState} from 'react'
import FBDetails from './FacebookDetails'

function FacebookCard(props) {

    let [click, setClick] = useState(false)    

    let cardStyle = {
        backgroundColor: props.profile.filtered ? '#B0E0E6' : 'white' 
    }
    
    return (
        <li className="fb-card" style={cardStyle}>
            <div className="fb-img">
                <button onClick={() => setClick(click = !click)}>
                <img src={props.profile.img} alt="contact-pic"></img>
                </button>
            </div>
            {click && <FBDetails profile={props.profile}/> }
        </li>
    )
}

export default FacebookCard;