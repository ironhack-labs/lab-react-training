import React from 'react';
import '../components/IdCard.css'

const IdCard = (props) => {
    
    const { lastName, firstName, img, gender, height } = props;
    
    return <div id="IdCard">
    <div>
        <p>Last name: {lastName}</p>
        <p>First name: {firstName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
    </div>
    
    <img src={img} style={{ width: '100px', height: '100px'}} />
    </div>
}

export default IdCard;