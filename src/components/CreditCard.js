import React from 'react'

const creditCard = (props) => {
    console.log('see what props contain', props)
let img = '';
if (props.type === 'Visa'){
    img = "img/visa.png"
}
if (props.type === 'Master Card'){
    img = "img/master-card.svg"
}

const divStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
    border: '2px solid black',
    borderRadius: '15px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
}

    

    return  (   
        <div style={divStyle}>
            <div className ="creditCardLogo"> 
                <img src={img} alt={props.type}/> 
            </div>
            <div className ="creditCardNumber"> 
                <p>{props.number}</p> </div>
            <div>
            <p> Expires: {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            </div>
            <div> <p>{props.owner}</p> </div>
        </div>
    ) 


}

export default creditCard ;