import React from 'react';

const IdCard = ({lastName, firstName, gender, height, birth, picture})=>{
    return (
     <div>
        <img src={picture} alt="profilepic"/>
        <p><strong>Firstname:</strong>  {firstName} </p>
        <p><strong>Lastname:</strong>  {lastName} </p>
        <p><strong>Gender:</strong>  {gender}</p>
        <p><strong>Height:</strong>  {height}</p>
     </div>
    )
}

export default IdCard