import React from 'react';
import data from "../../data/berlin.json";
import "./Facebook.css";

const Facebook = () => {
  console.log(data)
  const student= "Student";
  const teacher = "Teacher";
  return (
    <div>
    <div className="profile-wrapper">
      {data.map((item, index) => {
        return (
          <div key={item.lastName} className="profile-card">
            <img src={item.img} width="100" alt={item.lastName} />
            <div className="profile-info">
              <p><strong>First name: </strong> {item.firstName}</p>
              <p><strong>Last name: </strong> {item.lastName}</p>
              <p><strong>Country: </strong> {item.country}</p>
              <p><strong>Type: </strong> {item.isStudent ? student : teacher}</p>
            </div>
          </div>
          
        )
      })}
    
    </div>
    </div>
  )
}

export default Facebook;
