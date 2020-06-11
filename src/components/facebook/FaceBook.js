import React from 'react';
import '../idcard/IdCard';

function FaceBook(props, IdCard){
    //object destructuging of all props so that I can call them easily
    const {img, firstName, lastName, country, isStudent} = props.person

    return(
        // <IdCard></IdCard> - HOW COULD I MAKE THIS WORK
        
        <div className="Card">
            <img className="Pic" width="180px"src={img} alt="gaddam"/>
            <div className="info">
                <p><strong>First Name: </strong>{firstName}</p>
                <p><strong>Last Name: </strong>{lastName}</p>
                <p><strong>Country: </strong>{country}</p>
                <p><strong>Type: </strong>{isStudent?'Student':'Teacher'}</p>
            </div>
        </div> 
    )
}

export default FaceBook;