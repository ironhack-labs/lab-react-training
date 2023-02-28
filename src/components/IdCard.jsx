import React from "react"

function IdCard(props) {
    const {picture, firstName, lastName, gender, height, birth} = props;
  return (
    <div class="idCard">
        <img src={picture} alt="profile card picture" />
        <section class="idInfo">
        <p><strong>First name:</strong>{firstName}</p>
        <p><strong>Last name:</strong>{lastName}</p>
        <p><strong>Gender:</strong>{gender}</p>
        <p><strong>Height:</strong>{height}</p>
        <p><strong>Birth:</strong>{birth.toLocaleString()}</p>
        </section>
        </div>
  )
}

export default IdCard


