import React from "react";

function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className='idCard'>
        <div>
    <h1>Last Name: </h1>{lastName}
    <h2>First Name:</h2> {firstName}
    <p>Gender: </p>{gender}
    <p>Height: </p>{height}
    <p>Birth: {birth}</p>
    
    <div>
    <img src={picture}  />
</div>
</div>
    </div>
  )
}

export default IdCard