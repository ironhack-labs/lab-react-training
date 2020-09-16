import React from "react"

const FacebookList = ({ firstName, lastName, country, img, isStudent }) => {
 
  return (
                 
                <div className="right">
                  <img src={img} alt=""/>
                  <strong>First name</strong>: {firstName} <br/>
                  <strong>Last name</strong>: {lastName} <br/>
                  <strong>Country</strong>: {country} <br/>
                  {isStudent ? <p>Student</p> : <p>Teacher</p> }
                </div>
  )
}

export default FacebookList