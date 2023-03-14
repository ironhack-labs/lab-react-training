import React from 'react'

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="d-flex flex-row border border-dark m-1 ">
      <img className="m-2" src={picture} alt="ProfilePic" />
    <div className="mt-3">
      <p className="m-0"><b> First Name: </b> {firstName}</p>
      <p className="m-0"><b> Last Name: </b> {lastName}</p>
      <p className="m-0"><b> Gender: </b> {gender}</p>
      <p className="m-0"><b> Height: </b> {height}</p>
      <p><b> Birth: </b> {birth}</p>
    </div>
  </div>
  )
}

IdCard.defaultProps = {
  picture: '',
  firstName: '',
  lastName: '',
  gender: '',
  height: '',
  birth: '',
}

export default IdCard