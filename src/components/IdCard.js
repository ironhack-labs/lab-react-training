import React, {Fragment} from 'react';

function IdCard(props){
    return (
        <Fragment>
         <img src={props.picture} alt={`profile picutre of ${props.firstName} ${props.lastName}`}/>
         
            <article>

            <p>Last name:{props.lastName}</p>
            <p>First name:{props.firstName}</p>
            <p>Gender:{props.gender}</p>
            <p>Height:{props.height}</p>
            <p>Birthday:{props.birthday}</p>
            <p>Birth: {props.picture}</p>
            </article>

        </Fragment>
    );
}

export default IdCard;
