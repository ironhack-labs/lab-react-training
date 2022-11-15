import React from "react";

function IdCard(props){
    const {lastName, firstName, gender, height, birth, picture} = props;

return(
    
<div className="idCard">

    <img src={picture} alt="" />
<div className="id">    
    <p className="lastname">last name: {lastName}</p>
    <p className="firstname">first name: {firstName}</p>
    <p className="gender">gender: {gender}</p>
    <p className="height">height: {height}</p>
    <p className="birth">birth: {birth.toLocaleString()}</p>
</div>
</div>
)

}
export default IdCard