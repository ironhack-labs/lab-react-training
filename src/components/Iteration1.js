import React, {Component} from 'react';

const IdCard = ({lastname, firstname, gender, height, birth, picture}) => (
    <div className="card">
        <div>
            <img src={picture} />
        </div>
        <div>
            <p><b>First name: </b>{firstname}</p>
            <p><b>Last name: </b>{lastname}</p>
            <p><b>Gender: </b>{gender}</p>
            <p><b>Height: </b>{height}</p>
            <p><b>Birth: </b>{birth}</p>
        </div>
    </div>
)


export default IdCard;
