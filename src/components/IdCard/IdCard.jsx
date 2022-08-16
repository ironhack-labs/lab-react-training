import React from 'react'

function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props
  return (
    <>
        <div class="card">
            <div className="card-picture">
                <img src={picture} alt="picture" />
            </div>
            <div className="card-details">
                <p><b>First Name: </b>{firstName}</p>
                <p><b>Last Name: </b>{lastName}</p>
                <p><b>Gender: </b>{gender}</p>
                <p><b>Height: </b>{height}</p>
                <p><b>Birth: </b>{birth}</p>
            </div>

        </div>
    </>
  )
}

export default IdCard