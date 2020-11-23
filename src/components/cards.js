import React from "react";

const idCard = ({lastName, firstName, gender, height, birth, picture}) => (
<div className = "Card">
<span>Last Name: {lastName}</span>
<span>First Name: {firstName}</span>
<span>Gender: {gender}</span>
<span>Height: {height}</span>
<span>Birth: {birth}</span>
<img src = {picture}/>
</div>
)

export default idCard