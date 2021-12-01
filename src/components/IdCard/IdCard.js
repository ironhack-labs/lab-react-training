import React from 'react';



const IdCard =(props)=>{
const {firstName, lastName, gender, height, birth, picture}= props
return(
<div id="card"> 

    <div>
        <img src={picture} alt={firstName}></img>
    </div>

        <div>
            <p>FirstName: {firstName}</p>
            <p>LastName: {lastName}</p>
            <p>Gender: {gender}</p>  
            <p>Birth: {birth.toDateString()}</p>
            <p>Height: {height}</p>
        </div>

</div>



) 
}

export default IdCard;