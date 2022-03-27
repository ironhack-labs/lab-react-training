import React, { Component } from "react";
import profiles from '../../../data/berlin.json'


 class FaceBook extends Component  {
    state = {
      countries: "",
      choseCountries: []
    }

  getCountries = () => {
    const arrCountries = [];
      profiles.forEach(profile => {
        if (!arrCountries.includes(profile.country)) {
          arrCountries.push(profile.country)
        }
      })
      this.setState({
        choseCountries: arrCountries
  })
 }

  render() {

    return (
      <>  
      <div>
        <div>
          <button>countries</button>
        </div>
      </div>
    
      {
        profiles.map(({ img, firstName, lastName, country, isStudent}, index) => {
          return (
            <div key={index} className="container-card mb-2 mt-2">
        <div className="card-group card-contact">
          <div className="card container-card">
          <div>
            <img className="img-thumbnail size-img" src={img} alt="Card-contact"/>
            </div>
            <div className="card-body">
              <h6 className="card-title">First Name: {firstName}</h6>
              <h6 className="card-title">Last Name: {lastName}</h6>
              <h6 className="card-title">Country: {country}</h6>
              <h6 className="card-title">Type: {isStudent ? "Student" : "Teacher"}</h6>
            </div>
            </div>
        </div>
        </div>
          )
        })
      }

    </>
  )
 }
}

export default FaceBook;
