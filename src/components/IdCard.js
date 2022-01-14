import React from 'react'

const IdCard = ({ lastName, firstName, gender, height, birth , picture }) => {
  const birthDate = new Date(birth)
  

  return (
    <section className="id-card">
      <div className="id-org">
        <img src={picture} alt={lastName} />
        <div className="id-info">
          <h4>First Name: {firstName}</h4>
          <h4>Last Name: {lastName}</h4>
          <h4>Gender: {gender}</h4>
          <h4>Height: {height}</h4>
          <h4>Birth: {birthDate.toDateString()}</h4>
        </div>
      </div>
    </section>
  )
}

export default IdCard
