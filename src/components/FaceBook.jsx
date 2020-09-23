import React from 'react'
import './FaceBook.css'
import profiles from '../data/berlin.json';



export default class FaceBook extends React.Component {
  constructor(props) {
    super(props);
    this.userProfile = profiles.map((user, i) => {
      return (
        <div className="FaceBook" key={i}>
          <img src={user.img} alt={user.firstName}/>
          <div className="right">
          <div><b>First Name: </b>{user.firstName}</div>
          <div><b>Last Name: </b>{user.lastName}</div>
          <div><b>Country: </b>{user.country}</div>
          <div><b>Type: </b>{user.isStudent ? "Student": "Teacher"}</div>
          </div>
          
        </div>
            )
    })
    this.countries = profiles.map(user => user.country)
  }
  render () {
     return this.userProfile
  }
}

