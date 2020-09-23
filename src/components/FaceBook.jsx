/* eslint-disable no-restricted-globals */
import React from 'react'
import './FaceBook.css'
import profiles from '../data/berlin.json';



export default class FaceBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { country : "paris" };
    // this.userProfile = profiles.map((user, i) => {
    //   return (
    //     <div className="FaceBook" key={i}>
    //       <img src={user.img} alt={user.firstName}/>
    //       <div className="right">
    //       <div><b>First Name: </b>{user.firstName}</div>
    //       <div><b>Last Name: </b>{user.lastName}</div>
    //       <div><b>Country: </b>{user.country}</div>
    //       <div><b>Type: </b>{user.isStudent ? "Student": "Teacher"}</div>
    //       </div>
    //     </div>
    //         )
    // })
    this.countries = profiles.map(user => user.country)
    this.countries = this.countries.filter((country, index) => this.countries.indexOf(country) === index)
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ country : e.target.name })
  }



  render () {
     return (
       <div>
        <div className="ButtonGroup">
          <button 
            name="All"
            style={{backgroundColor : this.state.country === "All" ? "lightblue" :  "white"} } 
            onClick={() => this.handleClick(event)} 
            className="Button">All</button>
          {this.countries.map(country => {
            return <button 
                    key={country} 
                    style={{backgroundColor : this.state.country === country ? "lightblue" :  "white"} } 
                    name={country} 
                    onClick={() => this.handleClick(event)} 
                    className="Button">{country}</button>
          })}
          
        </div>
        <div className="UserProfile">
          {profiles.map((user, i) => {
            return (
              <div 
                className="FaceBook" 
                key={i} 
                style={{backgroundColor : this.state.country === user.country || this.state.country === "All" ? "lightblue" :  "white"} } >
                  <img src={user.img} alt={user.firstName}/>
                  <div className="right">
                  <div><b>First Name: </b>{user.firstName}</div>
                  <div><b>Last Name: </b>{user.lastName}</div>
                  <div><b>Country: </b>{user.country}</div>
                  <div><b>Type: </b>{user.isStudent ? "Student": "Teacher"}</div>
                  </div>
              </div>
                  )
          })}
        </div>
       </div>
     )
  }
}

