/* eslint-disable no-restricted-globals */
import React from 'react'
import './FaceBook.css'
import profiles from '../data/berlin.json';



export default class FaceBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      Search: "",
      Name: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickUser = this.handleClickUser.bind(this);
    this.countries = profiles.map(user => user.country)
    this.countries = this.countries.filter((country, index) => this.countries.indexOf(country) === index)
    this.profiles = profiles
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClickUser(e) {
    e.preventDefault();
    this.setState({ 
      "Name" : e.target.name
    })

  }




  render() {
    this.profiles = profiles.filter((user) =>
      user.firstName.includes(
        this.state.Search.charAt(0).toUpperCase() + this.state.Search.slice(1)
      )
    );
  
    return (
      <div>
        <div className="ButtonGroup">
          <button
            name="country"
            value="All"
            style={{ backgroundColor: this.state.country === "All" ? "lightblue" : "white" }}
            onClick={this.handleClick}
            className="Button">All</button>
          {this.countries.map(country => {
            return <button
              key={country}
              style={{ backgroundColor: this.state.country === country ? "lightblue" : "white" }}
              name="country"
              value={country}
              onClick={this.handleClick}
              className="Button">{country}</button>
          })}

        </div>
        <input className="form-control mb-5 mt-5" placeholder="Search the profile" name="Search" type="text" value={this.state.Search} onChange={this.handleClick} />
        <div className="UserProfile">
          {this.profiles.map((user, i) => {
            return (
              <div
                onClick={this.handleClickUser}
                name= {user.firstName}
                className="FaceBook"
                key={i}
                style={{ backgroundColor: this.state.country === user.country || this.state.country === "All" ? "lightblue" : "white" }} >
                <img name={user.firstName} src={user.img} alt={user.firstName} />
                {this.state.Name === user.firstName && 
                  <div className="right">
                    <div><b>First Name: </b>{user.firstName}</div>
                    <div><b>Last Name: </b>{user.lastName}</div>
                    <div><b>Country: </b>{user.country}</div>
                    <div><b>Type: </b>{user.isStudent ? "Student" : "Teacher"}</div>
                  </div>
                }
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

