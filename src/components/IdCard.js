import React from 'react';
import './IdCard.css';

const IdCard = ({lastName,firstName, gender, height, birth, picture}) =>{
    const getBirth = date => date.toUTCString().split(' ',4).join(' ');
    
    const getHeight = height =>  height / 100;
    return (
        <div class="IdCard">
            <img src={picture} alt="Imagem" />
            <div class='CardContent'>
                <p><strong>First Name: </strong>{firstName}</p>
                <p><strong>Last Name: </strong>{lastName}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p><strong>Height: </strong>{getHeight(height)} m </p>
                <p><strong>Birth: </strong>{getBirth(birth)}</p>
            </div>
        </div>
    );
};

export default IdCard;
