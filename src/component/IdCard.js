import React from 'react';

function IdCard(prop) {

        function changeDate(date){
                const birth = new Date(date);
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                return birth.toLocaleDateString(undefined, options);
        }
        return (
                <div className="idCard border">
                        <img src={prop.picture} alt={prop.firstName} />
                        <div className="info">
                                <p><strong> First name: </strong> <span>{prop.firstName}</span></p>
                                <p><strong> Last name: </strong>  <span>{prop.lastName}</span></p>
                                <p><strong> Gender: </strong>  <span>{prop.gender}</span></p>
                                <p><strong> Height: </strong>  <span>{prop.height}</span></p>  
                                <p><strong> Birth: </strong>  <span>{changeDate(prop.birth)}</span></p>
                                
                        </div>
       
                </div>
        )
}

export default IdCard
