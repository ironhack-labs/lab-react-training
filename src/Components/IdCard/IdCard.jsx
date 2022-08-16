import React from "react";

function IdCard(props) {
    const{firstName, lastName, gender, height, birth, picture} = props;

return (
    <div >
<img src={picture} alt="Profilepic" />
<p>First Name: {firstName}</p>
<p>Last Name: {lastName}</p>
<p>Gender: {gender}</p>
<p>Height: {height}</p>
<p>Birthday: {birth}</p>

    </div>
);
}


export default IdCard;