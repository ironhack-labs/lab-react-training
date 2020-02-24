import React from 'react'

const IdCard = (props) => {
    return (
        <div className="idcardconteiner">
             <div>
                 <img src={props.picture} alt=""/>
             </div>
                 <div className="idcardinfo">
                     <p><h1>First Name:</h1>{props.firsName}</p>
                     <p><h1>Last Name:</h1>{props.lastName}</p>
                     <p><h1>Gender:</h1>{props.gender}</p>
                     <p><h1>Height:</h1>{props.height}</p>
                     <p><h1>Birth:</h1>{props.birth.toDateString()}</p>
                 </div>
        </div>
    )
}

export default IdCard