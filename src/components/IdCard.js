import React from 'react';
import Moment from 'react-moment';

function IdCard(props){
    console.log(props.birth.toISOString().slice(0, 10))
    return(
        <div className="user-info">
            <img src={props.picture} alt="Image" />
            <div className="user-detail">

            <p>Last Name:{props.lastName}</p>
            <p>First Name:{props.firstName}</p>
            <p>Gender:{props.gender}</p>
            <p>Height{props.height}</p>
            <p>BirthDate: <Moment format='dddd MMMM Do YYYY'>{props.birth}</Moment> </p>
 
            </div>
        </div>
    )
}

export default IdCard